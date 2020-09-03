package com.example.lostAndFindserver.repository;

import com.example.lostAndFindserver.model.OwnItemDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnItemDetailsRepository extends JpaRepository<OwnItemDetails, Long> {
}
