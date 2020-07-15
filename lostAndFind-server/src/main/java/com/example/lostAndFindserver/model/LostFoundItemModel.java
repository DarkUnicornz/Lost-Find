package com.example.lostAndFindserver.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

//import javax.persistence.ManyToOne;
import java.util.Date;

@Entity
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
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
