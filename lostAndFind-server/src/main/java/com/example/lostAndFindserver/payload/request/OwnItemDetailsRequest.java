package com.example.lostAndFindserver.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class OwnItemDetailsRequest {

    @NotBlank
    @Size(max = 20)
    private String item_name;

    @NotBlank
    @Size(max = 200)
    private String item_details;

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
}
