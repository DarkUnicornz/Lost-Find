package com.example.lostAndFindserver.service;

import com.example.lostAndFindserver.model.UserModel;
import com.example.lostAndFindserver.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private RegistrationRepository registrationRepository;

    public UserModel saveUser(UserModel userModel) {
        return registrationRepository.save(userModel);
    }

    public UserModel fetchUserByEmail(String emailId) {
        return registrationRepository.findByEmail(emailId);
    }

}
