package com.crisilto.fakebook_be;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloFakebook {
    @GetMapping("/hello")
    public String helloFakebook() {
        return "Hello Fakebook!";
    }
}
