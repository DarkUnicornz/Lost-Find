package com.example.lostAndFindserver.controller;


import com.example.lostAndFindserver.model.OwnItemDetails;
import com.example.lostAndFindserver.payload.request.OwnItemDetailsRequest;
import com.example.lostAndFindserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/ownitemdetails")
    @PreAuthorize("hasRole('USER') ")
    public OwnItemDetails saveOwnItemDetails(@Valid @RequestBody OwnItemDetailsRequest ownItemDetailsRequest){

        OwnItemDetails ownItemDetails = new OwnItemDetails(
                ownItemDetailsRequest.getItem_name());

        return userService.saveOwnItemDetails(ownItemDetails);

    }

    @GetMapping("/allitem")
    @PreAuthorize("hasRole('USER') ")
    public List<OwnItemDetails> getAllOwnItemDetails() {

        return userService.getOwnItem();
    }

    @DeleteMapping("/deleteitem/{id}")
    @PreAuthorize("hasRole('USER')")
    public String deleteOwnItemDetails(@PathVariable Long id) {
        return userService.deleteOwnItem(id);
    }
}
