package com.example.lostAndFindserver.repository;

import com.example.lostAndFindserver.model.FoundItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoundItemRepository extends JpaRepository<FoundItem, Long> {
}
