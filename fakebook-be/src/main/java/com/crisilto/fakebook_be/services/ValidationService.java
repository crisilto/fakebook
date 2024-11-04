package com.crisilto.fakebook_be.services;

import java.time.LocalDate;

public class ValidationService {
    public static boolean isValidAge(LocalDate birthDate, int minAge, int maxAge) {
        LocalDate today = LocalDate.now();
        int age = today.getYear() - birthDate.getYear();

        if (today.getMonthValue() < birthDate.getMonthValue() || 
            (today.getMonthValue() == birthDate.getMonthValue() && 
             today.getDayOfMonth() < birthDate.getDayOfMonth())) {
            age--;
        }

        return age >= minAge && age <= maxAge;
    }
}