package com.example.lostAndFindserver.payload.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.sql.Date;
import java.sql.Time;

public class PostRequest {

    @NotBlank
    @Size(max = 50)
    private String item;

    @NotBlank
    @Size(max = 50)
    private String location;

    private Integer price;

    @NotBlank
    @Size(max = 500)
    private String description;

    private String lost_found_date;

//    @NotBlank
//    private Date lostPostDate;
//
//    @NotBlank
//    private Time lostPostTime;

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

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public String getLost_found_date() {
        return lost_found_date;
    }

    public void setLost_found_date(String lost_found_date) {
        this.lost_found_date = lost_found_date;
    }

    //        public Date getLostPostDate() {
//        return lostPostDate;
//    }
//
//    public void setLostPostDate(Date lostPostDate) {
//        this.lostPostDate = lostPostDate;
//    }
//
//    public Time getLostPostTime() {
//        return lostPostTime;
//    }
//
//    public void setLostPostTime(Time lostPostTime) {
//        this.lostPostTime = lostPostTime;
//    }
}
