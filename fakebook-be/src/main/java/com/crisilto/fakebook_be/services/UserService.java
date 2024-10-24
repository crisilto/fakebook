package com.crisilto.fakebook_be.services;

import com.crisilto.fakebook_be.models.User;
import com.crisilto.fakebook_be.repositories.UserRepository;
import com.crisilto.fakebook_be.requests.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public boolean registerUser(RegisterRequest registerRequest) {
        if(userRepository.findByEmail(registerRequest.getEmail()) != null){
            return false; //Email already in use
        }

        String encodedPassword = passwordEncoder.encode(registerRequest.getPassword());

        User newUser = new User(registerRequest.getEmail(), encodedPassword);
        userRepository.save(newUser);
        return true;
    }

    public boolean authenticateUser(String email, String rawPassword) {
        User user = userRepository.findByEmail(email);

        return user != null && passwordEncoder.matches(rawPassword, user.getPassword());
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), new ArrayList<>());
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
