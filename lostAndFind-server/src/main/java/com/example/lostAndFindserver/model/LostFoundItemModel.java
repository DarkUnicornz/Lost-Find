package com.example.lostAndFindserver.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.sql.Date;
//import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name="LostFoundItems")
public class LostFoundItemModel {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long ItemId;

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

    @NotBlank
    private String flag;

    private String lost_found_date;

    private LocalDate lostPostDate;

    private LocalTime lostPostTime;

    @ManyToOne
    @JoinColumn(name="u_id")
    private User user;

   public LostFoundItemModel (){ }

   public LostFoundItemModel(String item, String location, Integer price, String description, String flag, String lost_found_date, LocalDate lostPostDate, LocalTime lostPostTime, User user) {
       this.item = item;
       this.location = location;
       this.price = price;
       this.description = description;
       this.flag = flag;
       this.lost_found_date = lost_found_date;
       this.lostPostDate = lostPostDate;
       this.lostPostTime = lostPostTime;
       this.user = user;
   }

    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }

    public String getLost_found_date() {
        return lost_found_date;
    }

    public void setLost_found_date(String lost_found_date) {
        this.lost_found_date = lost_found_date;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
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

    public String getFlag() {
        return flag;
    }

    public void setFlag(String flag) {
        this.flag = flag;
    }

    public LocalDate getLostPostDate() {
        return lostPostDate;
    }

    public void setLostPostDate(LocalDate lostPostDate) {
        this.lostPostDate = lostPostDate;
    }

    public LocalTime getLostPostTime() {
        return lostPostTime;
    }

    public void setLostPostTime(LocalTime lostPostTime) {
        this.lostPostTime = lostPostTime;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
