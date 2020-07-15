package com.example.lostAndFindserver.service;

import com.example.lostAndFindserver.model.LostFoundItemModel;
import com.example.lostAndFindserver.repository.LostFoundItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LostFoundItemService {

    @Autowired
    private LostFoundItemRepository lostFoundItemRepository;

    public String savePost(LostFoundItemModel lostFoundItemModel){
        lostFoundItemRepository.save(lostFoundItemModel);
        return "Success";
    }
}
