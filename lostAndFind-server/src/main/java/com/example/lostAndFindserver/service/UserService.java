package com.example.lostAndFindserver.service;

import com.example.lostAndFindserver.model.OwnItemDetails;
import com.example.lostAndFindserver.repository.OwnItemDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private OwnItemDetailsRepository ownItemDetailsRepository;

    public OwnItemDetails saveOwnItemDetails(OwnItemDetails ownItemDetails) {
        return ownItemDetailsRepository.save(ownItemDetails);
    }

    public List<OwnItemDetails> getOwnItem() {
        return ownItemDetailsRepository.findAll();
    }

}
