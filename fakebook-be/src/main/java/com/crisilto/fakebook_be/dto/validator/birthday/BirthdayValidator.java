package com.crisilto.fakebook_be.dto.validator.birthday;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.crisilto.fakebook_be.services.ValidationService;

public class BirthdayValidator implements ConstraintValidator<ValidBirthday, String> {
    @Override
    public boolean isValid(String birthday, ConstraintValidatorContext context) {
        try {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            LocalDate birthDate = LocalDate.parse(birthday, formatter);

            return ValidationService.isValidAge(birthDate, 10, 100);
        } catch (Exception e) {
            return false;
        }
    }
}