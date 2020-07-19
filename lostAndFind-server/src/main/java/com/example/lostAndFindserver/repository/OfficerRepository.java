package com.example.lostAndFindserver.repository;

import com.example.lostAndFindserver.model.Officer;
import com.example.lostAndFindserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OfficerRepository extends JpaRepository<Officer , Long> {
    Optional<User> findByUsername(String usernamee);

    Boolean existsByUsername(String username);

//    Boolean existsByEmail(String email);
}
