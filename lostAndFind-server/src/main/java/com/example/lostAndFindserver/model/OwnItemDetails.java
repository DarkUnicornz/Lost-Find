package com.example.lostAndFindserver.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "ownItemDetails")
public class OwnItemDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String item_name;

    @NotBlank
    @Size(max = 200)
    private String item_details;

    @NotBlank
    private String image1;

    @NotBlank
    private String image2;

    @ManyToOne
    @JoinColumn(name="u_id")
    private User user;


    public OwnItemDetails() {
    }

    public OwnItemDetails(String item_name, String item_details, String image1, String image2, User user){
        this.item_name=item_name;
        this.item_details = item_details;
        this.image1 = image1;
        this.image2 = image2;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getItem_name() {
        return item_name;
    }

    public void setItem_name(String item_name) {
        this.item_name = item_name;
    }

    public String getItem_details() {
        return item_details;
    }

    public void setItem_details(String item_details) {
        this.item_details = item_details;
    }

    public String getImage1() {
        return image1;
    }

    public void setImage1(String image1) {
        this.image1 = image1;
    }

    public String getImage2() {
        return image2;
    }

    public void setImage2(String image2) {
        this.image2 = image2;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
