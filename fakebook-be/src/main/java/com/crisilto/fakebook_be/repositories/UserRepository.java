package com.crisilto.fakebook_be.repositories;

import com.crisilto.fakebook_be.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByContactInfo(String contactInfo);

}
