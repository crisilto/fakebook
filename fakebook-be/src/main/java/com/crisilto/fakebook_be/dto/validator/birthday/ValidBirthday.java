package com.crisilto.fakebook_be.dto.validator.birthday;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Constraint(validatedBy = BirthdayValidator.class)
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidBirthday {
    String message() default "It looks like you entered the wrong info. Please be sure to use your real birthday.";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
