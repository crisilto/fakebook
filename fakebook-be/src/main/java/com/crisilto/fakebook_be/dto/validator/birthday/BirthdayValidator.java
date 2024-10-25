package com.crisilto.fakebook_be.dto.validator.birthday;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class BirthdayValidator implements ConstraintValidator<ValidBirthday, String> {
    @Override
    public void initialize(ValidBirthday constraintAnnotation) {
    }

    @Override
    public boolean isValid(String birthday, ConstraintValidatorContext context) {
        try{
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
            LocalDate birthDate = LocalDate.parse(birthday, formatter);
            LocalDate today = LocalDate.now();

            int age = today.getYear() - birthDate.getYear();
            return age  >= 10 && age <= 100;
        }catch (Exception e) {
            return false;
        }
    }
}
