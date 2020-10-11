package com.example.lostAndFindserver.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name="Complain")
public class Complain {

    @Id
    @GeneratedValue
    private Long complain_id;

    @NotBlank
    @Size(max = 50)
    private String policestation;

    @NotBlank
    @Size(max = 500)
    private String description;

//    @NotBlank
//    @OneToOne
//    private Long item_id;
    @OneToOne
    @JoinColumn(name="item_id")
    private LostFoundItemModel lostFoundItemModel;

//    @NotBlank
//    @OneToOne
    private String flag;

    @ManyToOne
    @JoinColumn(name="u_id")
    private User user;

    public Complain() {}

    public Complain(String policestation, String description, LostFoundItemModel lostFoundItemModel, String flag, User user) {
        this.policestation = policestation;
        this.description = description;
        this.lostFoundItemModel = lostFoundItemModel;
        this.flag = flag;
        this.user = user;
    }


    public Long getComplain_id() {
        return complain_id;
    }

    public void setComplain_id(Long complain_id) {
        this.complain_id = complain_id;
    }

    public String getPolicestation() {
        return policestation;
    }

    public void setPolicestation(String policestation) {
        this.policestation = policestation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

//    public Long getItem_id() {
//        return item_id;
//    }
//
//    public void setItem_id(Long item_id) {
//        this.item_id = item_id;
//    }


    public LostFoundItemModel getLostFoundItemModel() {
        return lostFoundItemModel;
    }

    public void setLostFoundItemModel(LostFoundItemModel lostFoundItemModel) {
        this.lostFoundItemModel = lostFoundItemModel;
    }

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
