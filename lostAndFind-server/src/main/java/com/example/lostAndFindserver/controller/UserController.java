package com.example.lostAndFindserver.controller;


import com.example.lostAndFindserver.model.OwnItemDetails;
import com.example.lostAndFindserver.model.User;
import com.example.lostAndFindserver.payload.request.OwnItemDetailsRequest;
import com.example.lostAndFindserver.repository.UserRepository;
import com.example.lostAndFindserver.security.services.UserDetailsImpl;
import com.example.lostAndFindserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.Principal;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/ownitemdetails")
    @PreAuthorize("hasRole('USER') ")
    public OwnItemDetails saveOwnItemDetails(@Valid @RequestBody OwnItemDetailsRequest ownItemDetailsRequest, Authentication authentication){
//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userRepository.findById(userDetails.getId()).get();
//        String name = auth.getName();
        OwnItemDetails ownItemDetails = new OwnItemDetails(
                ownItemDetailsRequest.getItem_name(),
                ownItemDetailsRequest.getItem_details(),
                user
        );

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

    @PutMapping("/updateitem")
    @PreAuthorize("hasRole('USER')")
    public OwnItemDetails updateOwnItemDetails(@RequestBody OwnItemDetails ownItemDetails) {
        return userService.updateOwnItem(ownItemDetails);
    }
}
