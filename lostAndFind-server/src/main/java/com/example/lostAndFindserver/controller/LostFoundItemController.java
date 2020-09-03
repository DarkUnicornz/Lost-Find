package com.example.lostAndFindserver.controller;

import com.example.lostAndFindserver.model.LostFoundItemModel;
import com.example.lostAndFindserver.payload.request.PostRequest;
import com.example.lostAndFindserver.service.LostFoundItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/lost&founditem")
public class LostFoundItemController {

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
