package com.crisilto.fakebook_be.services;

import com.crisilto.fakebook_be.models.User;
import com.crisilto.fakebook_be.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public boolean authenticateUser(String email, String rawPassword) {
        User user = userRepository.findByEmail(email);

        return user != null && passwordEncoder.matches(rawPassword, user.getPassword());
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
