 package com.example.lostAndFindserver.controller;

 import com.example.lostAndFindserver.model.LostFoundItemModel;
<<<<<<< HEAD
// import com.example.lostAndFindserver.model.UserModel;
 import com.example.lostAndFindserver.service.LostFoundItemService;
// import com.example.lostAndFindserver.service.UserService;

 import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.CrossOrigin;
=======
 import com.example.lostAndFindserver.service.LostFoundItemService;


 import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.web.bind.annotation.CrossOrigin;
>>>>>>> 4e585e8ffed16ac013c736e2288840ad40d4119c
 import org.springframework.web.bind.annotation.PostMapping;
 import org.springframework.web.bind.annotation.RequestBody;
 import org.springframework.web.bind.annotation.RequestMapping;
 import org.springframework.web.bind.annotation.RestController;

<<<<<<< HEAD
 @RequestMapping("/lostfoundItem")
// @CrossOrigin(origins = "http://localhost:4200")
=======
 @RequestMapping("/post")
 @CrossOrigin(origins = "http://localhost:4200")
>>>>>>> 4e585e8ffed16ac013c736e2288840ad40d4119c
 @RestController
 public class LostFoundItemController {

    @Autowired
    private LostFoundItemService lostFoundItemService;
<<<<<<< HEAD
//    private UserService userService;

    @PostMapping("/post")
//    @CrossOrigin(origins = "http://localhost:4200")
    public String savePost(@RequestBody LostFoundItemModel post) throws Exception {

//        String tempNIC = lostFoundItemModel.getNic();
//        if(tempNIC != null && "".equals(tempNIC)){
//            UserModel userObj = userService.fetchUserByNIC(tempNIC);
//
//            if(userObj!=null){
//                throw new Exception("You should register first");
//            }
//        }
//        String lItemObj = null;
        LostFoundItemModel lostFoundItemModel = new LostFoundItemModel(
                post.getItemId(),
                post.getDescription(),
                post.getLocation()
        );

        return lostFoundItemService.savePost(lostFoundItemModel);
        //return lItemObj;
=======

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
>>>>>>> 4e585e8ffed16ac013c736e2288840ad40d4119c
    }
 }
