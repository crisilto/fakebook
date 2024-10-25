package com.crisilto.fakebook_be.services;

import com.crisilto.fakebook_be.models.User;
import com.crisilto.fakebook_be.repositories.UserRepository;
import com.crisilto.fakebook_be.dto.RegisterRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.ArrayList;
import java.util.regex.Pattern;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    private static final Pattern EMAIL_PATTERN = Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");
    private static final Pattern PHONE_PATTERN = Pattern.compile("^\\d{7,15}$");

    public boolean registerUser(RegisterRequest registerRequest) {
        String mobileOrEmail = registerRequest.getMobileOrEmail();

        if(isEmail(mobileOrEmail)){
            if(userRepository.findByEmail(mobileOrEmail) != null){
                return false; //Email already in use
            }
        }else if(isPhoneNumber(mobileOrEmail)){
            if(userRepository.findByPhoneNumber(mobileOrEmail)!= null){
                return false; //Phone number already in use
            }
        }else{
            throw new IllegalArgumentException("Invalid email or phone number format");
        }

        String encodedPassword = passwordEncoder.encode(registerRequest.getPassword());

        User newUser = new User(
                registerRequest.getFirstName(),
                registerRequest.getLastName(),
                registerRequest.getBirthday(),
                registerRequest.getGender(),
                registerRequest.getPronoun(),
                mobileOrEmail,
                encodedPassword
        );

        userRepository.save(newUser);
        return true;
    }

    public boolean authenticateUser(String mobileOrEmail, String rawPassword) {
        User user;
        if(isEmail(mobileOrEmail)){
            user = userRepository.findByEmail(mobileOrEmail);
        }else if(isPhoneNumber(mobileOrEmail)){
            user = userRepository.findByPhoneNumber(mobileOrEmail);
        }else{
            throw new IllegalArgumentException("Invalid email or phone number format");
        }

        return user != null && passwordEncoder.matches(rawPassword, user.getPassword());
    }

    private boolean isEmail(String input){
        return EMAIL_PATTERN.matcher(input).matches();
    }

    private boolean isPhoneNumber(String input){
        return PHONE_PATTERN.matcher(input).matches();
    }

    @Override
    public UserDetails loadUserByUsername(String mobileOrEmail) throws UsernameNotFoundException {
        User user;
        if (isEmail(mobileOrEmail)) {
            user = userRepository.findByEmail(mobileOrEmail);
        } else if (isPhoneNumber(mobileOrEmail)) {
            user = userRepository.findByPhoneNumber(mobileOrEmail);
        } else {
            throw new UsernameNotFoundException("User not found with mobileOrEmail: " + mobileOrEmail);
        }
        return new org.springframework.security.core.userdetails.User(user.getMobileOrEmail(), user.getPassword(), new ArrayList<>());
    }
}
