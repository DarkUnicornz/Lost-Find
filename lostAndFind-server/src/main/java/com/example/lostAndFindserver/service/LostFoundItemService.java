package com.example.lostAndFindserver.service;

import com.example.lostAndFindserver.model.LostFoundItemModel;
import com.example.lostAndFindserver.repository.LostFoundItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LostFoundItemService {

    @Autowired
    private LostFoundItemRepository lostFoundItemRepository;

    public LostFoundItemModel savePost(LostFoundItemModel lostFoundItemModel){
        return lostFoundItemRepository.save(lostFoundItemModel);
    }
}
