//import 'package:lost_and_find_mobile/routes/application.dart';
import 'package:lost_and_find_mobile/services/profile_service.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class EditDetails extends StatefulWidget {
  @override
  _EditDetailsState createState() => _EditDetailsState();
}

class _EditDetailsState extends State<EditDetails>{
  Future<User> details;
  //Officer data;
  bool isEnabled;
  final emailController = TextEditingController();
  final contactController = TextEditingController();
  String init_email;
  @override
  initState() {
    super.initState();
    isEnabled = true;
    details = ProfService().getDetails();

    details.then((goo) {
      
      emailController.text = goo.email;
      // init_email = goo.email;
      contactController.text = goo.contact_number;
    }, onError: (e) {
      print(e);
    });
  }
}
