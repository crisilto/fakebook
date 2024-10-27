package com.crisilto.fakebook_be.controllers;

import com.crisilto.fakebook_be.dto.LoginRequest;
import com.crisilto.fakebook_be.dto.RegisterRequest;
import com.crisilto.fakebook_be.security.JwtUtil;
import com.crisilto.fakebook_be.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        boolean isRegistered = userService.registerUser(registerRequest);

        if(isRegistered) {
            return ResponseEntity.ok("User registered successfully");
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email or phone number already in use");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        boolean isAuthenticated = userService.authenticateUser(loginRequest.getContactInfo(), loginRequest.getPassword());

        if (isAuthenticated) {
            UserDetails userDetails = userService.loadUserByUsername(loginRequest.getContactInfo());
            String jwt = jwtUtil.generateToken(userDetails);

            return ResponseEntity.ok(new AuthenticationResponse(jwt));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid mobile/email or password");
        }
    }
}