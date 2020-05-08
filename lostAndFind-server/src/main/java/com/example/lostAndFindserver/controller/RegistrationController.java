package com.example.lostAndFindserver.controller;

import com.example.lostAndFindserver.model.UserModel;
import com.example.lostAndFindserver.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RegistrationController {

    @GetMapping("/hello")
    public String helloCool() {
        return "Hello DarkUnicorn";
    }

    @Autowired
    private UserService userService;


    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:4200")
    public UserModel registerUser(@RequestBody UserModel userModel) throws Exception{

        String tempEmail = userModel.getEmail();
        if(tempEmail != null && !"".equals(tempEmail)) {
            UserModel userObj = userService.fetchUserByEmail(tempEmail);

            if(userObj != null) {
                throw new Exception("User with " + tempEmail + " is already exist");
            }
        }

        UserModel userObj = null;
        userObj = userService.saveUser(userModel);
        return userObj;
    }


    @PostMapping("/authenticate")
    @CrossOrigin(origins = "http://localhost:4200")
    public UserModel loginUser(@RequestBody UserModel userModel) throws Exception {
        String tempEmail = userModel.getEmail();
        String tempPassword = userModel.getPassword();

        UserModel userObj = null;

        if(tempEmail != null && tempPassword != null) {
            userObj = userService.fetchUserByEmailAndPassword(tempEmail, tempPassword);
        }
        if(userObj == null) {
            throw new Exception("Bad credentials****");
        }
        return userObj;
    }

}
