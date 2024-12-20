package com.crisilto.fakebook_be.dto.validator.pronoun;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Constraint(validatedBy = PronounValidator.class)
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface ValidPronoun {
    String message() default "Please select your pronoun.";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
