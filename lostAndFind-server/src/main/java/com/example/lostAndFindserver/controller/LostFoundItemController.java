 package com.example.lostAndFindserver.controller;

 import com.example.lostAndFindserver.model.LostFoundItemModel;
 import com.example.lostAndFindserver.service.LostFoundItemService;


 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.web.bind.annotation.CrossOrigin;
 import org.springframework.web.bind.annotation.PostMapping;
 import org.springframework.web.bind.annotation.RequestBody;
 import org.springframework.web.bind.annotation.RequestMapping;
 import org.springframework.web.bind.annotation.RestController;

 @RequestMapping("/post")
 @CrossOrigin(origins = "http://localhost:4200")
 @RestController
 public class LostFoundItemController {

    @Autowired
    private LostFoundItemService lostFoundItemService;

    @PostMapping("/post")
    @CrossOrigin(origins = "http://localhost:4200")
    public LostFoundItemModel savePost(@RequestBody LostFoundItemModel lostFoundItemModel) throws Exception {

        String tempNIC = lostFoundItemModel.getNic();
        if(tempNIC != null && "".equals(tempNIC)){
            lostFoundItemModel lostFoundObj = LostFoundItemService.fetchUserByNIC(tempNIC);

            if(userObj!=null){
                throw new Exception("You should register first");
            }
        }
        LostFoundItemModel lItemObj = null;
        lItemObj = lostFoundItemService.savePost(lostFoundItemModel);
        return lItemObj;
    }
 }
