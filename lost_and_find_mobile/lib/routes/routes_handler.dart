import 'package:flutter/cupertino.dart';
import 'package:lost_and_find_mobile/screens/auth/register_screen.dart';
import 'package:lost_and_find_mobile/screens/home/home_screen.dart';
import 'package:lost_and_find_mobile/screens/splash/splash_screen.dart';
import 'package:lost_and_find_mobile/screens/auth/auth_screen.dart';
import 'package:flutter/material.dart';
import 'package:fluro/fluro.dart';

// var splashHandler = Handler(
//     handlerFunc: (BuildContext context, Map<String, List<String>> params) {
//   return SplashScreen();
// });

var splashHandler = Handler(
  handlerFunc: (BuildContext context, Map<String, List<String>> params) {
    return SplashScreen();
  },
);

var authHandler = Handler(
    handlerFunc: (BuildContext context, Map<String, List<String>> params) {
  return AuthScreen();
});



var registerHandler = Handler(
    handlerFunc: (BuildContext context, Map<String, List<String>> params) {
  return RegistrationScreen();
});
