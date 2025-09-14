package com.losquefaltabansoria.core.exception;

public class ApiException extends RuntimeException {

    public ApiException(String message) {
        super(message);
    }

    public ApiException() {
        super("An error occurred while processing the request");
    }

}