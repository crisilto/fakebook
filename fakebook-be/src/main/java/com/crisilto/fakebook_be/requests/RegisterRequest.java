package com.crisilto.fakebook_be.requests;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RegisterRequest {
    private String email, password;
}
