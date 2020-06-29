import 'package:fluro/fluro.dart';
import 'package:flutter/material.dart';
import 'package:lost_and_find_mobile/routes/routes.dart';
import 'package:lost_and_find_mobile/routes/Application.dart';

class LostFoundUserApp extends StatelessWidget{
  LostFoundUserApp(){
    final router = Router();
    Routes.configureRouter(router); 
    Application.router = router;
  }

  @override
  Widget build(BuildContext context){
    return MaterialApp(
      title: "User App",
      debugShowCheckedModeBanner: false,
      onGenerateRoute: Application.router.generator,
    );
  }
}