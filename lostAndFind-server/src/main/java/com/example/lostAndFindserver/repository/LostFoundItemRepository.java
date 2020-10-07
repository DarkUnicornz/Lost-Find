package com.example.lostAndFindserver.repository;

import com.example.lostAndFindserver.model.LostFoundItemModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LostFoundItemRepository extends JpaRepository <LostFoundItemModel, Long> {
    List<LostFoundItemModel> findByFlag(String flag);
//   LostFoundItemModel save(LostFoundItemModel lostFoundItemModel);

//   @Override
//   Optional<LostFoundItemModel> findById(String s);
//   LostFoundItemModel findByItemId(String ItemId);
}
