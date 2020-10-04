package com.example.lostAndFindserver.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name="FoundItems")
public class FoundItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ItemId;

    @NotBlank
    @Size(max = 50)
    private String location;

    @NotBlank
    @Size(max = 500)
    private String description;

    @ManyToOne
    @JoinColumn(name="u_id")
    private User user;

    public FoundItem (){ }

    public FoundItem(String location, String description, User user) {
        this.location = location;
        this.description = description;
        this.user = user;
    }

    public Long getItemId() {
        return ItemId;
    }

    public void setItemId(Long itemId) {
        this.ItemId = itemId;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
