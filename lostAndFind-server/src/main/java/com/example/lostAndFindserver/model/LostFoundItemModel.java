package com.example.lostAndFindserver.model;

import javax.persistence.Entity;
import javax.persistence.Id;
//import javax.persistence.ManyToOne;
import java.util.Date;

@Entity
public class LostFoundItemModel {

    @Id
    private String itemId;
    private String modelId;

//    @ManyToOne
    private String nic;
    private String location;
    private String lostFoundStatus;
    private Date lostFoundDate;
    private String image;
    private String description;
    private String handoverStatus;
    private Date postDate;
    private Date postTime;

    public LostFoundItemModel () {
    }

    public LostFoundItemModel (String itemId, String modelId, String nic, String location, String lostFoundStatus, Date lostFoundDate, String image, String description, String handoverStatus, Date postDate, Date postTime) {
        this.itemId = itemId;
        this.modelId = modelId;
        this.nic = nic;
        this.location = location;
        this.lostFoundStatus = lostFoundStatus;
        this.lostFoundDate = lostFoundDate;
        this.image = image;
        this.description = description;
        this.handoverStatus = handoverStatus;
        this.postDate = postDate;
        this.postTime = postTime;
    }

    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public String getModelId() {
        return modelId;
    }

    public void setModelId(String modelId) {
        this.modelId = modelId;
    }

    public String getNic() {
        return nic;
    }

    public void setNic(String nic) {
        this.nic = nic;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getLostFoundStatus() {
        return lostFoundStatus;
    }

    public void setLostFoundStatus(String lostFoundStatus) {
        this.lostFoundStatus = lostFoundStatus;
    }

    public Date getLostFoundDate() {
        return lostFoundDate;
    }

    public void setLostFoundDate(Date lostFoundDate) {
        this.lostFoundDate = lostFoundDate;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getHandoverStatus() {
        return handoverStatus;
    }

    public void setHandoverStatus(String handoverStatus) {
        this.handoverStatus = handoverStatus;
    }

    public Date getPostDate() {
        return postDate;
    }

    public void setPostDate(Date postDate) {
        this.postDate = postDate;
    }

    public Date getPostTime() {
        return postTime;
    }

    public void setPostTime(Date postTime) {
        this.postTime = postTime;
    }

}
