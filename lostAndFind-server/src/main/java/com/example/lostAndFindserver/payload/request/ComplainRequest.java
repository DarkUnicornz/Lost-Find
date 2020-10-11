package com.example.lostAndFindserver.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class ComplainRequest {

    @NotBlank
    @Size(max = 50)
    private String police_station;

    @NotBlank
    @Size(max = 500)
    private String description;

    public String getPolice_station() {
        return police_station;
    }

    public void setPolice_station(String police_station) {
        this.police_station = police_station;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
