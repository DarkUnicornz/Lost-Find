package com.example.lostAndFindserver.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class OwnItemDetailsRequest {

    @NotBlank
    @Size(max = 20)
    private String item_name;

    public String getItem_name() {
        return item_name;
    }

    public void setItem_name(String item_name) {
        this.item_name = item_name;
    }
}
