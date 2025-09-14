package com.losquefaltabansoria.core.application;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import com.losquefaltabansoria.core.exception.ApiException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailServiceImpl implements EmailService {

    private static final String NEW_USER_ACCOUNT_VERIFICATION = "New User account verification";
    private static final String RESET_PASSWORD_REQUEST = "Reset your password";

    private final JavaMailSender mailSender;
    @Value("${spring.mail.verify.host}")
    private String host;
    @Value("${spring.mail.username}")
    private String fromEmail;

    @Override
    @Async
    public void sendNewAccountEmail(String name, String email, String token) {
        try {
            String message = String.format(
                    "Hello {},\n\n Please verify your email by clicking the link below:\n{}/verify?token={}\n\nThank you.",
                    name, host, token);
            sendEmail(name, email, NEW_USER_ACCOUNT_VERIFICATION, message);
        } catch (Exception e) {
            log.error(e.getMessage());
            throw new ApiException(
                    String.format("Unable to send the verification email to {}", email));
        }
    }

    @Override
    @Async
    public void sendPasswordResetEmail(String name, String email, String token) {
        try {
            String message = String.format(
                    "Hello {},\n\n Please reset your account password by clicking the link below:\n{}/reset-password?token={}\n\nThank you.",
                    name, host, token);
            sendEmail(name, email, RESET_PASSWORD_REQUEST, message);
        } catch (Exception e) {
            log.error(e.getMessage());
            throw new ApiException(
                    String.format("Unable to send the reset-password email to {}", email));
        }
    }

    private void sendEmail(String name, String email, String subject, String body) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setSubject(subject);
        message.setFrom(fromEmail);
        message.setTo(email);
        message.setText(body);
        mailSender.send(message);
    }

}
