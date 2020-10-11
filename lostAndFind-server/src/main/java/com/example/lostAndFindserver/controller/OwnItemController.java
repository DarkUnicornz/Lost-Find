package com.example.lostAndFindserver.controller;


import com.example.lostAndFindserver.model.User;
import com.example.lostAndFindserver.repository.UserRepository;
import com.example.lostAndFindserver.security.services.UserDetailsImpl;
import com.example.lostAndFindserver.service.OwnItemDetailsService;
import com.example.lostAndFindserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/own_item")
public class OwnItemController {

    @Autowired
    private OwnItemDetailsService ownItemDetailsService;
//
////    @Autowired
////    private UserService userService;
//
    @Autowired
    private UserRepository userRepository;

    //Get user item count
    @GetMapping("/user_item_count")
    @PreAuthorize("hasRole('USER')")
    public Long getUserItemCounts(Authentication authentication) {

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userRepository.findById(userDetails.getId()).get();

        return ownItemDetailsService.getUserItemCount(user);
    }
}
