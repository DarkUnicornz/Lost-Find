package com.example.lostAndFindserver.repository;

import com.example.lostAndFindserver.model.LostFoundItemModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LostFoundItemRepository extends JpaRepository <LostFoundItemModel, Long> {
//   LostFoundItemModel save(LostFoundItemModel lostFoundItemModel);

//   @Override
//   Optional<LostFoundItemModel> findById(String s);
//   LostFoundItemModel findByItemId(String ItemId);
}
