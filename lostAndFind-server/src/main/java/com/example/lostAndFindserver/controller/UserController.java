package com.example.lostAndFindserver.controller;


import com.example.lostAndFindserver.model.OwnItemDetails;
import com.example.lostAndFindserver.model.User;
import com.example.lostAndFindserver.payload.request.OwnItemDetailsRequest;
import com.example.lostAndFindserver.repository.UserRepository;
import com.example.lostAndFindserver.security.services.UserDetailsImpl;
import com.example.lostAndFindserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
//import java.security.Principal;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Value("${upload.location}")
    private String fileLocation;

    @PostMapping("/ownitemdetails")
    @PreAuthorize("hasRole('USER') ")
    public OwnItemDetails saveOwnItemDetails(@Valid @RequestBody OwnItemDetailsRequest ownItemDetailsRequest, Authentication authentication){
//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userRepository.findById(userDetails.getId()).get();
//        String name = auth.getName();

        String[] images = ownItemDetailsRequest.getImages();

        byte[] image1 = Base64.getDecoder().decode(images[0].split(",")[1]);
        byte[] image2 = Base64.getDecoder().decode(images[0].split(",")[1]);

        String image1Id = UUID.randomUUID().toString();
        String image2Id = UUID.randomUUID().toString();


        try (FileOutputStream fos = new FileOutputStream(fileLocation + "/" + image1Id)) {
            fos.write(image1);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        OwnItemDetails ownItemDetails = new OwnItemDetails(
                ownItemDetailsRequest.getItem_name(),
                ownItemDetailsRequest.getItem_details(),
                image1Id,
                image2Id,
                user
        );

        return userService.saveOwnItemDetails(ownItemDetails);

    }

    @GetMapping("/allitem")
    @PreAuthorize("hasRole('USER') ")
    public List<OwnItemDetails> getAllOwnItemDetails() {

        return userService.getOwnItem();
    }

//    @GetMapping("/user_items/{u_id}")
//    @PreAuthorize("hasRole('USER') ")
//    public List<OwnItemDetails> getUserOwnItems(@PathVariable Long u_id) {
//
//        return userService.getUserOwnItemDetails(u_id);
//    }

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


    @GetMapping("/user_name/{id}")
    @PreAuthorize("hasRole('USER') ")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }
}
