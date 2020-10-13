package com.example.lostAndFindserver.service;

import com.example.lostAndFindserver.model.User;
import com.example.lostAndFindserver.repository.OwnItemDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OwnItemDetailsService {

    @Autowired
    private OwnItemDetailsRepository ownItemDetailsRepository;

    public Long getUserItemCount(User user) {
        return ownItemDetailsRepository.countByUser(user);
    }
}
