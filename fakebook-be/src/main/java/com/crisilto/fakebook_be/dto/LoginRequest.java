package com.crisilto.fakebook_be.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class LoginRequest {
    private String contactInfo, password;
}
