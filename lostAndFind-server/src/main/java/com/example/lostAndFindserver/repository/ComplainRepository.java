package com.example.lostAndFindserver.repository;

import com.example.lostAndFindserver.model.Complain;
import com.example.lostAndFindserver.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComplainRepository extends JpaRepository<Complain, Long> {

//    List<Complain> findByU_id(Long u_id);

    List<Complain> findByUser(User u_id);

    Long countByUser(User u_id);

//    Long countAll();

//    Complain countByUser(User u_id);

}
