package com.crisilto.fakebook_be.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter @Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Generates a unique ID for each user automatically
    private Long id;

    @Column(nullable = false, unique = true) //Ensures mobileOrEmail is unique and not null
    private String mobileOrEmail;

    @Column(nullable = false) //Ensures password is not null
    private String firstName, lastName, gender, birthday, password;

    @Column(nullable = true) //Allows pronoun to be null if Custom is not checked during registration
    private String pronoun;

    //Empty constructor for JPA
    public User() {}

    //Complete constructor to facilitate user login
    public User(String mobileOrEmail, String password) {
        this.mobileOrEmail = mobileOrEmail;
        this.password = password;
    }

    //Complete constructor to facilitate user registration
    public User(String firstName, String lastName, String birthday, String gender,  String pronoun, String mobileOrEmail, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.gender = gender;
        this.pronoun = pronoun;
        this.mobileOrEmail = mobileOrEmail;
        this.password = password;
    }
}