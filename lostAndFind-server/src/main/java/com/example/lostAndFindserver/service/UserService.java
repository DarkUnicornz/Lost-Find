package com.example.lostAndFindserver.service;

import com.example.lostAndFindserver.model.OwnItemDetails;
import com.example.lostAndFindserver.model.User;
import com.example.lostAndFindserver.repository.OwnItemDetailsRepository;
import com.example.lostAndFindserver.repository.UserRepository;
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

    public String deleteOwnItem(Long id) {
        ownItemDetailsRepository.deleteById(id);
        return "Item removed" + id;
    }

    public OwnItemDetails updateOwnItem(OwnItemDetails ownItemDetails) {
        OwnItemDetails existingOwnItem = ownItemDetailsRepository.findById(ownItemDetails.getId()).orElse(null);
        existingOwnItem.setItem_name(ownItemDetails.getItem_name());
        return ownItemDetailsRepository.save(existingOwnItem);
    }


    @Autowired
    private UserRepository userRepository;
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }


//    public OwnItemDetails getUserOwnItemDetails(Long u_id) {
//        return ownItemDetailsRepository.findByU_id(u_id).orElse(null);
//    }

}
