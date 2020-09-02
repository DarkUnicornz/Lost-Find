package com.example.lostAndFindserver.controller;

import com.example.lostAndFindserver.model.LostFoundItemModel;
import com.example.lostAndFindserver.payload.response.MessageResponse;
import com.example.lostAndFindserver.repository.LostFoundItemRepository;
import com.example.lostAndFindserver.service.LostFoundItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.example.lostAndFindserver.payload.request.PostRequest;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {


    @GetMapping("/all")
    public String allAccess() {
        return "Public Content.";
    }

    @GetMapping("/user")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @PreAuthorize("hasRole('USER')")
    public String userAccess() {
        return "User Content 11.";
    }

    @GetMapping("/mod")
    @PreAuthorize("hasRole('MODERATOR')")
    public String moderatorAccess() {
        return "Moderator Board.";
    }

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return "Admin Board.";
    }


//    @Autowired
//    LostFoundItemRepository lostFoundItemRepository;
//
//    @PostMapping("/post")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
//    public ResponseEntity<?> savePost(@Valid @RequestBody PostRequest postrequest){
//
//        LostFoundItemModel lostFoundItemModel = new LostFoundItemModel(
//                postrequest.getDescription(),
//                postrequest.getLocation());
//
//        LostFoundItemRepository.save(lostFoundItemModel);
//        return ResponseEntity.ok(new MessageResponse("Create post successfully!"));
//    }

    @Autowired
    private LostFoundItemService lostFoundItemService;

    @PostMapping("/post")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public LostFoundItemModel savePost(@Valid @RequestBody PostRequest postrequest){

        LostFoundItemModel lostFoundItemModel = new LostFoundItemModel(
                postrequest.getDescription(),
                postrequest.getLocation());

        return lostFoundItemService.savePost(lostFoundItemModel);

//        LostFoundItemRepository.save(lostFoundItemModel);
//        return ResponseEntity.ok(new MessageResponse("Create post successfully!"));
    }

}
