package com.crisilto.fakebook_be.dto;

import com.crisilto.fakebook_be.dto.validator.birthday.ValidBirthday;
import com.crisilto.fakebook_be.dto.validator.pronoun.ValidPronoun;
import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.NotNull;

@Getter @Setter
@ValidPronoun
public class RegisterRequest {
    @NotNull(message = "What's your name?")
    private String firstName;

    @NotNull(message = "What's your name?")
    private String lastName;

    @ValidBirthday
    private String birthday;

    private String gender;

    private String pronoun;

    @NotNull(message = "You'll use this when you log in and if you ever need to reset your password.")
    private String contactInfo;

    @NotNull(message = "Enter a combination of at least six numbers, letters and punctuation marks (like ! and &).")
    private String password;
}
