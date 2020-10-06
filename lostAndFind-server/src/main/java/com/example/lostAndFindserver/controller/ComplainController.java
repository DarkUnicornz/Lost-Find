package com.example.lostAndFindserver.controller;

import com.example.lostAndFindserver.model.Complain;
import com.example.lostAndFindserver.model.LostFoundItemModel;
import com.example.lostAndFindserver.model.User;
import com.example.lostAndFindserver.payload.request.ComplainRequest;
import com.example.lostAndFindserver.repository.LostFoundItemRepository;
import com.example.lostAndFindserver.repository.UserRepository;
import com.example.lostAndFindserver.security.services.UserDetailsImpl;
import com.example.lostAndFindserver.service.ComplainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

//import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/complain")
public class ComplainController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LostFoundItemRepository lostFoundItemRepository;

    @Autowired
    private ComplainService complainService;

    @PostMapping("/complain_post/{id}")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public Complain saveComplainPost(@PathVariable Long id, @RequestBody ComplainRequest complainRequest, Authentication authentication) {

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        User user = userRepository.findById(userDetails.getId()).get();

        LostFoundItemModel lostFoundItemModel = lostFoundItemRepository.findById(id).get();

//        Long item_id = lostFoundItemModel.getItemId();
//        String flag = lostFoundItemModel.getFlag();



        Complain complain = new Complain(
                complainRequest.getPolice_station(),
                complainRequest.getDescription(),
//                item_id,
//                flag,
//                lostFoundItemModel.getItemId(),
                lostFoundItemModel,
                lostFoundItemModel.getFlag(),
                user
        );

        return complainService.saveComplain(complain);
    }
}
