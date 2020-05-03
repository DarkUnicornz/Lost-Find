package com.example.lostAndFindserver.repository;

import com.example.lostAndFindserver.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository <UserModel, String> {
}
