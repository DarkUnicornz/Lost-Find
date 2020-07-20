//package com.example.lostAndFindserver.controller;
//
//import com.example.lostAndFindserver.model.LostFoundItemModel;
//import com.example.lostAndFindserver.payload.request.PostRequest;
//import com.example.lostAndFindserver.payload.response.MessageResponse;
//import com.example.lostAndFindserver.repository.LostFoundItemRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import javax.validation.Valid;
//
//@CrossOrigin(origins = "*", maxAge = 3600)
//@RestController
//@RequestMapping("/lostfoundItem")
//public class LostFoundItemController {
//
//    // @Autowired
//    // private LostFoundItemService lostFoundItemService;
//
//    @Autowired
//    PostRequest postRequest;
//
//    @Autowired
//    LostFoundItemRepository lostfoundItemRepository;
//
//    @PostMapping("/post")
//    public ResponseEntity<?> savePost(@Valid @RequestBody PostRequest postrequest) throws Exception {
//
////        String tempNIC = lostFoundItemModel.getNic();
////        if(tempNIC != null && "".equals(tempNIC)){
////            lostFoundItemModel lostFoundObj = LostFoundItemService.fetchUserByNIC(tempNIC);
////
////            if(userObj!=null){
////                throw new Exception("You should register first");
////            }
////        }
////        String lItemObj = null;
//        LostFoundItemModel lostFoundItemModel = new LostFoundItemModel(
//                postrequest.getItemId(),
//                postrequest.getDescription(),
//                postrequest.getLocation()
//            );
//
//        lostfoundItemRepository.save(lostFoundItemModel);
//
//        return ResponseEntity.ok(new MessageResponse("Post successfully!"));
//    }
//
//}
