package com.crisilto.fakebook_be.services;

import java.util.ArrayList;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.crisilto.fakebook_be.dto.RegisterRequest;
import com.crisilto.fakebook_be.models.User;
import com.crisilto.fakebook_be.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    private static final Pattern EMAIL_PATTERN = Pattern.compile("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");
    private static final Pattern PHONE_PATTERN = Pattern.compile("^\\d{7,15}$");

    public boolean registerUser(RegisterRequest registerRequest) {
        String contactInfo = registerRequest.getContactInfo();

        if(isEmail(contactInfo)){
            if(userRepository.findByContactInfo(contactInfo) != null){
                return false; 
            }
        }else if(isPhoneNumber(contactInfo)){
            if(userRepository.findByContactInfo(contactInfo)!= null){
                return false; 
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
                contactInfo,
                encodedPassword
        );

        userRepository.save(newUser);
        return true;
    }

    public boolean authenticateUser(String contactInfo, String rawPassword) {
        User user = userRepository.findByContactInfo(contactInfo);
        if(user == null){
            throw  new UsernameNotFoundException("User not found with mobile or email: " + contactInfo);
        }
        return passwordEncoder.matches(rawPassword, user.getPassword());
    }

    @Override
    public UserDetails loadUserByUsername(String contactInfo) throws UsernameNotFoundException {
        User user = userRepository.findByContactInfo(contactInfo);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with mobileOrEmail: " + contactInfo);
        }
        return new org.springframework.security.core.userdetails.User(user.getContactInfo(), user.getPassword(), new ArrayList<>());
    }

    private boolean isEmail(String input){
        return EMAIL_PATTERN.matcher(input).matches();
    }

    private boolean isPhoneNumber(String input){
        return PHONE_PATTERN.matcher(input).matches();
    }
}
