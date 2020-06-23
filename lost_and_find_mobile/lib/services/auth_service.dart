//import 'dart:html';

//import 'package:flutter/material.dart';
import 'package:lost_and_find_mobile/config/config.dart';
import 'package:logger/logger.dart';

class AuthService {
  final baseUrl = Config.baseUrl;
  Future<bool> login(String email, String password){
    // Map user = {
    //   'email': email,
    //   'password': password
    // };
    Logger().i('$email');
    Logger().i('$password');
    Logger().i('Url $baseUrl/authenticate/loginUser?user');
    
  }
}
// authenticateUser(user: { email: string; password: string; }) {
//     const headers = new HttpHeaders();
//     headers.append('Content-Type', 'application/json');
//     return this.http.post(AppConfig.BASE_URL + 'authenticate', user, { headers }).pipe();
//   }