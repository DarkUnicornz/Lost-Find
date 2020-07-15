package com.example.lostAndFindserver.model;

<<<<<<< HEAD
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
=======
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
>>>>>>> 4e585e8ffed16ac013c736e2288840ad40d4119c

//import javax.persistence.ManyToOne;
import java.util.Date;

@Entity
<<<<<<< HEAD
@Table(name = "lostAndFound_post")
public class LostFoundItemModel {

    @Id
    private String itemId;
//    private String modelId;

//    @ManyToOne
//    private String nic;
    private String location;
//    private String lostFoundStatus;
//    private Date lostFoundDate;
//    private String image;
    private String description;
//    private String handoverStatus;
//    private Date postDate;
//    private Date postTime;

    public LostFoundItemModel () { }

    public LostFoundItemModel(String itemId, String location, String description) {
        this.itemId = itemId;
        this.location = location;
        this.description = description;
    }

    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
=======
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
>>>>>>> 4e585e8ffed16ac013c736e2288840ad40d4119c
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
