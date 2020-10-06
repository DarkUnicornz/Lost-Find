package com.example.lostAndFindserver.controller;

//import com.example.lostAndFindserver.model.FoundItem;
import com.example.lostAndFindserver.model.LostFoundItemModel;
import com.example.lostAndFindserver.model.User;
//import com.example.lostAndFindserver.payload.request.FoundItemRequest;
import com.example.lostAndFindserver.payload.request.PostRequest;
//import com.example.lostAndFindserver.repository.LostFoundItemRepository;
import com.example.lostAndFindserver.repository.UserRepository;
import com.example.lostAndFindserver.security.services.UserDetailsImpl;
import com.example.lostAndFindserver.service.LostFoundItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/lost&founditem")
public class LostFoundItemController {

    @Autowired
    private LostFoundItemService lostFoundItemService;

//    @Autowired
//    private LostFoundItemRepository lostFoundItemRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/lost_post")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public LostFoundItemModel saveLostPost(@Valid @RequestBody PostRequest postrequest, Authentication authentication){

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userRepository.findById(userDetails.getId()).get();

        String flag = "lost";

        LostFoundItemModel lostFoundItemModel = new LostFoundItemModel(
                postrequest.getLocation(),
                postrequest.getDescription(),
                flag,
                user
        );

        return lostFoundItemService.saveLostPost(lostFoundItemModel);

//        LostFoundItemRepository.save(lostFoundItemModel);
//        return ResponseEntity.ok(new MessageResponse("Create post successfully!"));
    }


//    @Autowired
//    private LostFoundItemService lostFoundItemService;

    @PostMapping("/found_post")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public LostFoundItemModel saveFoundPost(@Valid @RequestBody PostRequest postRequest, Authentication authentication){

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userRepository.findById(userDetails.getId()).get();

        String flag = "found";

        LostFoundItemModel lostFoundItemModel = new LostFoundItemModel(
                postRequest.getLocation(),
                postRequest.getDescription(),
                flag,
                user
        );

        return lostFoundItemService.saveFoundPost(lostFoundItemModel);
    }




}
