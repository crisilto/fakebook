package com.crisilto.fakebook_be.requests;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class LoginRequest {
    private String email, password;
}
