package com.example.lostAndFindserver.controller;

//import com.example.lostAndFindserver.model.FoundItem;
import com.example.lostAndFindserver.model.LostFoundItemModel;
import com.example.lostAndFindserver.model.User;
//import com.example.lostAndFindserver.payload.request.FoundItemRequest;
import com.example.lostAndFindserver.payload.request.PostRequest;
//import com.example.lostAndFindserver.repository.LostFoundItemRepository;
//import com.example.lostAndFindserver.repository.LostFoundItemRepository;
import com.example.lostAndFindserver.repository.UserRepository;
import com.example.lostAndFindserver.security.services.UserDetailsImpl;
import com.example.lostAndFindserver.service.LostFoundItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

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

    //Submit lost posts
    @PostMapping("/lost_post")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public LostFoundItemModel saveLostPost(@Valid @RequestBody PostRequest postrequest, Authentication authentication){

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userRepository.findById(userDetails.getId()).get();

        String flag = "lost";
        LocalDate lostPostDate = LocalDate.now();
        LocalTime lostPostTime = LocalTime.now();

        System.out.println("Date" + lostPostDate);
        System.out.println("Time"+lostPostTime);

        LostFoundItemModel lostFoundItemModel = new LostFoundItemModel(
                postrequest.getItem(),
                postrequest.getLocation(),
                postrequest.getPrice(),
                postrequest.getDescription(),
                flag,
                postrequest.getLost_found_date(),
                lostPostDate,
                lostPostTime,
                user
        );

        System.out.println("Lost date"+ lostFoundItemModel.getLost_found_date());

        return lostFoundItemService.saveLostPost(lostFoundItemModel);

//        LostFoundItemRepository.save(lostFoundItemModel);
//        return ResponseEntity.ok(new MessageResponse("Create post successfully!"));
    }


//    @Autowired
//    private LostFoundItemService lostFoundItemService;

    //Submit found posts
    @PostMapping("/found_post")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public LostFoundItemModel saveFoundPost(@Valid @RequestBody PostRequest postRequest, Authentication authentication){

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userRepository.findById(userDetails.getId()).get();

        String flag = "found";
        LocalDate lostPostDate = LocalDate.now();
        LocalTime lostPostTime = LocalTime.now();

        LostFoundItemModel lostFoundItemModel = new LostFoundItemModel(
                postRequest.getItem(),
                postRequest.getLocation(),
                postRequest.getPrice(),
                postRequest.getDescription(),
                flag,
                postRequest.getLost_found_date(),
                lostPostDate,
                lostPostTime,
                user
        );

        return lostFoundItemService.saveFoundPost(lostFoundItemModel);
    }

    //Get all lost posts
    @GetMapping("/allLost_post")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<LostFoundItemModel> getAllLostPost() {
        return lostFoundItemService.getAllLostPost();

    }


    //Get all found posts
    @GetMapping("/all_found_post")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<LostFoundItemModel> getAllFoundPost() {
        return lostFoundItemService.getAllFoundPost();
    }

    //Count all lost posts
    @GetMapping("/all_lost_count")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public  Long getLostCount() {
        String flag = "lost";
        return lostFoundItemService.getAllLostCount(flag);
    }

    //Count all found posts
    @GetMapping("/all_found_count")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public  Long getFoundCount() {
        String flag = "found";
        return lostFoundItemService.getAllFoundCount(flag);
    }


    //Get lost post by user id
    @GetMapping("/user_lost_posts")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<LostFoundItemModel> getUserLostPost(Authentication authentication) {

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userRepository.findById(userDetails.getId()).get();

        String flag = "lost";

        return lostFoundItemService.getUserLostPost(user, flag);

    }


    //Get found post by user id
    @GetMapping("/user_found_posts")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public List<LostFoundItemModel> getUserFoundPost(Authentication authentication) {

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userRepository.findById(userDetails.getId()).get();

        String flag = "found";

        return lostFoundItemService.getUserFoundPost(user, flag);

    }

    //Count lost post by user id
    @GetMapping("/user_lost_count")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public  Long getUserLostCount(Authentication authentication) {

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userRepository.findById(userDetails.getId()).get();

        String flag = "lost";
        return lostFoundItemService.getUserLostCount(user, flag);
    }


    //Count found post by user id
    @GetMapping("/user_found_count")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public  Long getUserFoundCount(Authentication authentication) {

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userRepository.findById(userDetails.getId()).get();

        String flag = "found";
        return lostFoundItemService.getUserFoundCount(user, flag);
    }


}
