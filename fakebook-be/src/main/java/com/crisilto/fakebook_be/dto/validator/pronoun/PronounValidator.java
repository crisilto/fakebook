package com.crisilto.fakebook_be.dto.validator.pronoun;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.crisilto.fakebook_be.dto.RegisterRequest;

public class PronounValidator implements ConstraintValidator<ValidPronoun, RegisterRequest> {
    @Override
    public boolean isValid(RegisterRequest request, ConstraintValidatorContext context) {
        
        if(request.getGender() == null || request.getGender().isEmpty()){
            return false;
        }

        if("custom".equalsIgnoreCase(request.getGender())){
            return request.getPronoun() != null && !request.getPronoun().isEmpty();
        }
        return true;
    }
}
