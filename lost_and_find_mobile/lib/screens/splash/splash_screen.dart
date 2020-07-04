import 'package:lost_and_find_mobile/routes/Application.dart';
import 'package:lost_and_find_mobile/services/auth_service.dart';
//import 'package:lostfind_user/routes/application.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_spinkit/flutter_spinkit.dart';
//import 'package:lostfind_user/services/auth_service.dart';

class SplashScreen extends StatefulWidget{
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen>{
  @override
  void initState(){
    Future.delayed(Duration(seconds: 5), () async{
      AuthService().isLoggedIn().then((_){
        if(_)
          Application.router.navigateTo(context, '/home', clearStack: true);
        else 
          Application.router.navigateTo(context, '/auth', clearStack: true);
      });
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: Column(
          children: <Widget>[
            Logo(),
            Text(
              "Welcome to Lost&Find_App",
              textDirection: TextDirection.ltr,
              style: TextStyle(
                decoration: TextDecoration.none,
                fontSize: 30,
              ),
            ),
            const SizedBox(height: 30,),
            Container(
              child: SpinKitFadingCircle(
                color: Colors.black,
              ),
            )
          ],
        ),
      ),
    );
  }
}

class Logo extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    AssetImage assetImage = AssetImage('lib/images/logo.png');
    Image image = Image(
      image: assetImage,
      width: 100,
      height: 100,
    );
    return Container(
      child: image,
      margin: EdgeInsets.only(top: 200),
    );
  }
}
