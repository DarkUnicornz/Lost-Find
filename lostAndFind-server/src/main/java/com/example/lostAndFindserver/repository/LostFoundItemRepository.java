package com.example.lostAndFindserver.repository;

import com.example.lostAndFindserver.model.LostFoundItemModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LostFoundItemRepository extends JpaRepository <LostFoundItemModel, Integer> {
    LostFoundItemModel save(LostFoundItemModel lostFoundItemModel);

}
