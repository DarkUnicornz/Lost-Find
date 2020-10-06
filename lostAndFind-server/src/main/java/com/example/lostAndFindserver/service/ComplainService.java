package com.example.lostAndFindserver.service;

import com.example.lostAndFindserver.model.Complain;
import com.example.lostAndFindserver.repository.ComplainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ComplainService {

    @Autowired
    private ComplainRepository complainRepository;

    public Complain saveComplain(Complain complain) {
        return complainRepository.save(complain);
    }
}
