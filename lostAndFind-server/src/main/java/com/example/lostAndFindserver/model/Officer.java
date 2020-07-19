package com.example.lostAndFindserver.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "officer",
        uniqueConstraints = {
            @UniqueConstraint(columnNames = "nic"),
            @UniqueConstraint(columnNames = "username"),
        })
public class Officer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String nic;

    @NotBlank
    @Size(max = 20)
    private String username;

//    @NotBlank
//    @Size(max = 20)
//    private String policestation;

    @NotBlank
    @Size(max = 120)
    private String password;


    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "officer_pollicestation",
               joinColumns = @JoinColumn(name = "officer_id"),
               inverseJoinColumns = @JoinColumn(name = "police_Station"))
    private Set<Police_Station> police_stations = new HashSet<>();


    public Officer() {
    }

    public Officer(String nic, String username, String password) {
        this.nic = nic;
        this.username = username;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Police_Station> getPolice_stations() {
        return police_stations;
    }

    public void setPolice_stations(Set<Police_Station> police_stations) {
        this.police_stations = police_stations;
    }
}
