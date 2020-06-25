//import 'dart:html';
import 'package:dio/dio.dart';
//import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:lost_and_find_mobile/config/config.dart';
import 'package:logger/logger.dart';

String user;

class RegUser{
  String email;
  String password;
}

class AuthService {
  final baseUrl = Config.baseUrl;
  Future<bool> login(String email, String password){
    
    user = email;
    var reguser = new RegUser();

    reguser.email=email;
    reguser.password=password;

    Logger().i('$email');
    Logger().i('$password');
    Logger().i('Url $baseUrl/authenticate/loginUser?user');

    return Dio().get(
      '$baseUrl/authenticate/reguser'
    ).then((res) async{
      if(res.statusCode == 200) {
        String token = res.data["data"]["token"];
        return await _saveToken(token);
      }
      return false;
    }).catchError((err) => false);
  }

  Future<bool> _saveToken(String token) async{
    return await SharedPreferences.getInstance().then((instance){
      instance.setString("user", user);
      instance.setString("token", token);
    }).catchError((err) => false);
  }

  
}
// authenticateUser(user: { email: string; password: string; }) {
//     const headers = new HttpHeaders();
//     headers.append('Content-Type', 'application/json');
//     return this.http.post(AppConfig.BASE_URL + 'authenticate', user, { headers }).pipe();
//   }