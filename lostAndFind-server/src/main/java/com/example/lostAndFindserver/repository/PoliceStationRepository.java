package com.example.lostAndFindserver.repository;

import com.example.lostAndFindserver.model.EPolice_Station;
import com.example.lostAndFindserver.model.Police_Station;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PoliceStationRepository extends JpaRepository<Police_Station, Long> {
    Optional<Police_Station> findByPoliceStation(EPolice_Station policeStation);
}
