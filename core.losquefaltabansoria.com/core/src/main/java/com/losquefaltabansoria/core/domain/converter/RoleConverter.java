package com.losquefaltabansoria.core.domain.converter;

import java.util.stream.Stream;
import com.losquefaltabansoria.core.domain.enumerations.Authority;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class RoleConverter implements AttributeConverter<Authority, String> {

    @Override
    public String convertToDatabaseColumn(Authority authority) {
        if (authority == null) {
            return null;
        }
        return authority.getDescription();
    }

    @Override
    public Authority convertToEntityAttribute(String code) {
        if (code == null) {
            return null;
        } else
            return Stream.of(Authority.values())
                    .filter(authority -> authority.getDescription().equals(code)).findFirst()
                    .orElseThrow(IllegalAccessError::new);
    }

}
