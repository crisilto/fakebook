package com.crisilto.fakebook_be.dto.validator.pronoun;

import com.crisilto.fakebook_be.dto.RegisterRequest;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PronounValidator implements ConstraintValidator<ValidPronoun, RegisterRequest> {
    @Override
    public boolean isValid(RegisterRequest request, ConstraintValidatorContext context) {
        if("custom".equalsIgnoreCase(request.getGender())){
            return request.getPronoun() != null && request.getPronoun().isEmpty();
        }
        return true;
    }
}
