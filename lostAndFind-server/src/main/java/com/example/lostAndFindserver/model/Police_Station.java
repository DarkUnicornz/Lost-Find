package com.example.lostAndFindserver.model;

import javax.persistence.*;

@Entity
@Table(name = "police_station")
public class Police_Station {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private EPolice_Station policeStation;

    public Police_Station() {
    }

    public Police_Station(EPolice_Station policeStation) {this.policeStation = policeStation;}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public EPolice_Station getPoliceStation() {
        return policeStation;
    }

    public void setPoliceStation(EPolice_Station policeStation) {
        this.policeStation = policeStation;
    }
}
