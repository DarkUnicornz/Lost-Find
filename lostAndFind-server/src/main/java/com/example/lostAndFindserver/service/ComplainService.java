package com.example.lostAndFindserver.service;

import com.example.lostAndFindserver.model.Complain;
import com.example.lostAndFindserver.model.User;
import com.example.lostAndFindserver.repository.ComplainRepository;
//import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplainService {

    @Autowired
    private ComplainRepository complainRepository;

    public Complain saveComplain(Complain complain) {
        return complainRepository.save(complain);
    }

    public List<Complain> getUserComplain(User u_id) {
        return complainRepository.findByUser(u_id);
    }

    public Long getUserComplainCount(User u_id) {
        return complainRepository.countByUser(u_id);
    }

    public Long getAllComplainCount() {
        return complainRepository.count();
    }
}
