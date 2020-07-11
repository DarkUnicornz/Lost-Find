package com.example.lostAndFindserver.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

//import javax.persistence.ManyToOne;
import java.util.Date;

@Entity
@Table(	name = "lostFound_post",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "nic"),
        })
public class LostFoundItemModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String nic;

    @NotBlank
    @Size(max = 2000)
    private String description;


    public LostFoundItemModel () {
    }

    public LostFoundItemModel (String nic, String description) {

        this.nic = nic;
        this.description = description;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
