package com.example.lostAndFindserver.payload.request;

import javax.validation.constraints.NotBlank;

public class PostRequest {
    @NotBlank
    private String itemId;

    @NotBlank
    private String description;

    @NotBlank
    private String location;

    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
