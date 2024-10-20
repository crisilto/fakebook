package com.crisilto.fakebook_be.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Generates a unique ID for each user automatically
    @Getter @Setter
    private Long id;

    @Column(nullable = false, unique = true) //Ensures email is unique and not null
    @Getter @Setter
    private String email;

    @Column(nullable = false) //Ensures password is not null
    @Getter @Setter
    private String password;

    //Empty constructor for JPA
    public User() {}

    //Complete constructor to facilitate user creation
    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
