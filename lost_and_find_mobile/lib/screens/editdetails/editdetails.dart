import 'package:lost_and_find_mobile/routes/application.dart';
import 'package:lost_and_find_mobile/services/profile_service.dart';
import 'package:lost_and_find_mobile/model/user.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class EditDetails extends StatefulWidget {
  @override
  _EditDetailsState createState() => _EditDetailsState();
}

class _EditDetailsState extends State<EditDetails> {
  Future<User> details;
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
      //contactController.text = goo.contact_number;
    }, onError: (e) {
      print(e);
    });
  }
  showDialogBox(String email, String contact_number) {
    return showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: Text('Enter your password'),
            content: TextField(
              onChanged: (value) {
                setState(() {
                  password = value;
                });
              },
              decoration: InputDecoration(hintText: "Current password"),
            ),
            actions: <Widget>[
              FlatButton(
                child: Text('CONTINUE'),
                onPressed: () {
                  editDetails(nic, password, fName, lName, email,
                      phoneNo, address, dob, gender);
                },
              ),
              FlatButton(
                child: Text('CANCEL'),
                onPressed: () {
                  Navigator.of(context).pop();
                },
              )
            ],
          );
        });
  }
  Future editDetails(
      String nic,
      String password,
      String fName,
      String lName,
      String email,
      String phoneNo,
      String address,
      String dob,
      String gender) async {
    ProfService()
        .editDetails(
            nic, password, fName, lName, email, phoneNo, address, dob, gender)
        .then((res) {
      if (res) {
        isEnabled = true;
        Application.router.navigateTo(context, '/home', clearStack: true);
      } else {
        isEnabled = true;
        showDialog(
            context: context,
            builder: (BuildContext context) {
              return AlertDialog(
                title: Text("Invalid credentials"),
                actions: <Widget>[
                  FlatButton(
                    child: Text("Okay"),
                    onPressed: () {
                      Navigator.of(context).pop();
                    },
                  )
                ],
              );
            });
      }
    });
  }
  static final _regFormKey = new GlobalKey<FormState>();
  String fName, lName, password, dob, email, nic, gender;
  String phoneNo, address;
  // String new_email, new_contact;






  Future _handleRegistration(
      String nid,
      String password,
      String fName,
      String lName,
      String email,
      String phoneNo,
      String address,
      String dob,
      String gender) async {
    final form = _regFormKey.currentState;
  }
}
