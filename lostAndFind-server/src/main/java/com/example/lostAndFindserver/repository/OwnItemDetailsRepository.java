package com.example.lostAndFindserver.repository;

import com.example.lostAndFindserver.model.OwnItemDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//import java.util.Optional;

@Repository
public interface OwnItemDetailsRepository extends JpaRepository<OwnItemDetails, Long> {

//    Optional<OwnItemDetails> findById(Long id);

//    OwnItemDetails findByItem_name(String item_name);
}
