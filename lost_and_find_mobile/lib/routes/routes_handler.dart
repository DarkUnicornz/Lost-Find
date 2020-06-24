import 'package:flutter/cupertino.dart';
//import 'package:lostfind_user/screens/splash/splash_screen.dart';
import 'package:lost_and_find_mobile/screens/auth/auth_screen.dart';
import 'package:flutter/material.dart';
import 'package:fluro/fluro.dart';

// var splashHandler = Handler(
//     handlerFunc: (BuildContext context, Map<String, List<String>> params) {
//   return SplashScreen();
// });

var authHandler = Handler(
    handlerFunc: (BuildContext context, Map<String, List<String>> params) {
  return AuthScreen();
});
