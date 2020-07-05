//import 'dart:html';
import 'package:dio/dio.dart';
import 'package:lost_and_find_mobile/model/user.dart';
//import 'package:flutter/material.dart';
import 'package:lost_and_find_mobile/services/pref_service.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:lost_and_find_mobile/config/config.dart';
import 'package:logger/logger.dart';

String user;

class RegUser {
  String email;
  String password;
}

class AuthService {
  final baseUrl = Config.baseUrl;
  Future<bool> login(String email, String password) {
    user = email;
    var reguser = new RegUser();

    reguser.email = email;
    reguser.password = password;

    // Logger().i('$email');
    // Logger().i('$password');
    // Logger().i('Url $baseUrl/authenticate/loginUser?user');

    return Dio().get('$baseUrl/authenticate/reguser').then((res) async {
      if (res.statusCode == 200) {
        String token = res.data["data"]["token"];
        return await _saveToken(token);
      }
      return false;
    }).catchError((err) => false);
  }

  Future<bool> _saveToken(String token) async {
    return await SharedPreferences.getInstance().then((instance) {
      instance.setString("user", user);
      instance.setString("token", token);
    }).catchError((err) => false);
  }

  Future<bool> isLoggedIn() {
    return PrefService()
        .getToken()
        .then((token) => (token != null) ? true : false)
        .catchError((error) => Logger().e(error));
  }

  Future<bool> register(User user) {
    return Dio()
        .post('$baseUrl/authenticate/register', data: {
          "nic": user.nic,
          "email": user.email,
          "password": user.password,
          "first_name": user.fName,
          "last_name": user.lName,
          "address": user.address,
          "DOB": user.dob,
          "contact_number": user.phoneNo,
          "gender": user.gender
        }).then((res) async {
      if (res.statusCode == 201) {
        return await PrefService().setToken(res.data['data']['token']);
      }
    }).catchError((error) {
      Logger().e(error);
      return false;
    });
  }

  Future<bool> logout() async {
    await SharedPreferences.getInstance().then((prefs) {
      prefs.remove("token");
    });
    return true;
  }
}
// authenticateUser(user: { email: string; password: string; }) {
//     const headers = new HttpHeaders();
//     headers.append('Content-Type', 'application/json');
//     return this.http.post(AppConfig.BASE_URL + 'authenticate', user, { headers }).pipe();
//   }
