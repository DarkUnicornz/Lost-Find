package com.example.lostAndFindserver.repository;

import com.example.lostAndFindserver.model.OwnItemDetails;
import com.example.lostAndFindserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

//import java.util.Optional;

@Repository
public interface OwnItemDetailsRepository extends JpaRepository<OwnItemDetails, Long> {

    Optional<OwnItemDetails> findById(Long id);

    Long countByUser(User user);

}
