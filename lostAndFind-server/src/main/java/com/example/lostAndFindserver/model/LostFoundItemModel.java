package com.example.lostAndFindserver.model;

import javax.persistence.*;

@Entity
@Table(name="LostFoundItems")
public class LostFoundItemModel {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long ItemId;

   private String location;

   private String description;

   public LostFoundItemModel (){ }

   public LostFoundItemModel(String location, String description) {
       this.location = location;
       this.description = description;
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
}
