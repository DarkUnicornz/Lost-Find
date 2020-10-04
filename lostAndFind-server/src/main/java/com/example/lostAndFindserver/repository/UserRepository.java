package com.example.lostAndFindserver.repository;

import com.example.lostAndFindserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String usernamee);

    Boolean existsByUsername(String username);

    @Override
    Optional<User> findById(Long aLong);

//    Boolean existsByEmail(String email);
}
