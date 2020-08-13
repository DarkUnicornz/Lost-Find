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
                  editDetails(nic, password, fName, lName, email, phoneNo,
                      address, dob, gender);
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        resizeToAvoidBottomPadding: false,
        body: SingleChildScrollView(
          child: FutureBuilder(
              future: details,
              builder: (context, snapshot) {
                if (snapshot.hasData) {
                  nic = snapshot.data.nic;
                  password = snapshot.data.password;
                  fName = snapshot.data.first_name;
                  lName = snapshot.data.last_name;
                  email = snapshot.data.email;
                  phoneNo = snapshot.data.contact_number;
                  address = snapshot.data.address;
                  dob = snapshot.data.dob;
                  gender = snapshot.data.gender;
                  return Column(children: <Widget>[
                    SizedBox(
                      height: 40,
                    ),
                    Text(
                      "Edit your details here",
                      style: TextStyle(fontSize: 20),
                    ),
                    SizedBox(
                      height: 5,
                    ),
                    Container(
                      child: Form(
                        key: _regFormKey,
                        child: Column(
                          children: <Widget>[
                            SizedBox(
                              height: 8,
                            ),
                            Center(
                                child: Container(
                                    width: 320,
                                    child: TextFormField(
                                      readOnly: true,
                                      initialValue: nic,
                                      obscureText: false,
                                      validator: (val) {
                                        if (val.length == 0) {
                                          return "NIC cannot be empty";
                                        } else if (val.length != 10) {
                                          return "Not a valid NIC number";
                                        }
                                      },
                                      decoration: InputDecoration(
                                        labelText: "NIC Number",
                                      ),
                                      keyboardType: TextInputType.text,
                                      style: new TextStyle(
                                        fontFamily: "Poppins",
                                      ),
                                    ))),
                            SizedBox(
                              height: 10,
                            ),
                            Center(
                              child: Container(
                                width: 320,
                                child: TextFormField(
                                  obscureText: false,
                                      readOnly: true,
                                      initialValue: password,
                                      decoration: InputDecoration(
                                        labelText: "password",
                                      ),
                                      keyboardType: TextInputType.text,
                                      style: new TextStyle(
                                        fontFamily: "Poppins",
                                      ),
                                ),
                              ),
                            ),
                            SizedBox(
                              height: 8,
                            ),
                            Center(
                                child: Container(
                                    width: 320,
                                    child: TextFormField(
                                      obscureText: false,
                                      readOnly: true,
                                      initialValue: fName,
                                      decoration: InputDecoration(
                                        labelText: "First Name",
                                      ),
                                      keyboardType: TextInputType.text,
                                      style: new TextStyle(
                                        fontFamily: "Poppins",
                                      ),
                                    ))),
                            SizedBox(
                              height: 8,
                            ),
                            Center(
                                child: Container(
                                    width: 320,
                                    child: TextFormField(
                                      obscureText: false,
                                      initialValue: lName,
                                      readOnly: true,
                                      decoration: InputDecoration(
                                        labelText: "Last Name",
                                      ),
                                      keyboardType: TextInputType.text,
                                      style: new TextStyle(
                                        fontFamily: "Poppins",
                                      ),
                                    ))),
                            SizedBox(
                              height: 8,
                            ),
                            Center(
                                child: Container(
                                    width: 320,
                                    child: TextFormField(
                                      controller: emailController,
                                      obscureText: false,
                                      onChanged: (value) {
                                        setState(() {
                                          email = value;
                                        });
                                      },
                                      validator: (val) {
                                        bool emailValid = RegExp(
                                                r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
                                            .hasMatch(val);
                                        if (val.length == 0) {
                                          return "Email cannot be empty";
                                        }
                                        if (!emailValid) {
                                          return "Not a valid email";
                                        }
                                      },
                                      decoration: InputDecoration(
                                        labelText: "Email",
                                      ),
                                      keyboardType: TextInputType.text,
                                      style: new TextStyle(
                                        fontFamily: "Poppins",
                                      ),
                                    ))),
                            SizedBox(
                              height: 8,
                            ),
                            Center(
                                child: Container(
                                    width: 320,
                                    child: TextFormField(
                                      controller: contactController,
                                      obscureText: false,
                                      onChanged: (value) {
                                        setState(() {
                                          phoneNo = value;
                                        });
                                      },
                                      validator: (val) {
                                        bool isNumeric(String s) {
                                          if (s == null) {
                                            return false;
                                          }
                                          return double.tryParse(s) != null;
                                        }

                                        if (val.length == 0) {
                                          return "Mobile number cannot be empty";
                                        } else if (val.length != 10 ||
                                            !isNumeric(val)) {
                                          return "Invalid mobile number";
                                        }
                                      },
                                      decoration: InputDecoration(
                                        labelText: "Mobile Number",
                                      ),
                                      keyboardType: TextInputType.text,
                                      style: new TextStyle(
                                        fontFamily: "Poppins",
                                      ),
                                    ))),
                            SizedBox(
                              height: 8,
                            ),
                            Center(
                                child: Container(
                                    width: 320,
                                    child: TextFormField(
                                      initialValue: address,
                                      readOnly: true,
                                      obscureText: false,
                                      validator: (val) {
                                        if (val.length == 0) {
                                          return "address id cannot be empty";
                                        }
                                      },
                                      decoration: InputDecoration(
                                        labelText: "Address",
                                      ),
                                      keyboardType: TextInputType.text,
                                      style: new TextStyle(
                                        fontFamily: "Poppins",
                                      ),
                                    ))),
                            SizedBox(
                              height: 8,
                            ),
                            Center(
                                child: Container(
                                    width: 320,
                                    child: TextFormField(
                                      initialValue: dob,
                                      readOnly: true,
                                      obscureText: false,
                                      decoration: InputDecoration(
                                        labelText: "Date Of Birth",
                                        hintStyle: TextStyle(fontSize: 13),
                                      ),
                                      keyboardType: TextInputType.text,
                                      style: new TextStyle(
                                        fontFamily: "Poppins",
                                      ),
                                    ))),
                            SizedBox(
                              height: 8,
                            ),
                            Center(
                                child: Container(
                                    width: 320,
                                    child: TextFormField(
                                      initialValue: gender,
                                      readOnly: true,
                                      obscureText: false,
                                      validator: (val) {
                                        if (val.length == 0) {
                                          return "gender cannot be empty";
                                        }
                                      },
                                      decoration: InputDecoration(
                                        labelText: "gender",
                                      ),
                                      keyboardType: TextInputType.text,
                                      style: new TextStyle(
                                        fontFamily: "Poppins",
                                      ),
                                    ))),
                            RaisedButton(
                              shape: RoundedRectangleBorder(
                                  borderRadius: new BorderRadius.circular(18.0),
                                  side: BorderSide(color: Colors.green)),
                              onPressed: () {
                                if (isEnabled) {
                                  isEnabled = false;
                                  print(email);

                                  if (_regFormKey.currentState.validate()) {
                                    showDialogBox(emailController.text,
                                        contactController.text);
                                  }
                                } else {
                                  return null;
                                }
                              },
                              textColor: Colors.white,
                              child: const Text('Update Details',
                                  style: TextStyle(fontSize: 20)),
                              color: Colors.green,
                            ),
                            RaisedButton(
                              shape: RoundedRectangleBorder(
                                  borderRadius: new BorderRadius.circular(18.0),
                                  side: BorderSide(color: Colors.orange)),
                              onPressed: () {
                                if (isEnabled) {
                                //   Application.router
                                //       .navigateTo(context, '/pass/$user');
                                // }
                              },
                              textColor: Colors.white,
                              child: const Text('Change Password',
                                  style: TextStyle(fontSize: 20)),
                              color: Colors.orange,
                            ),
                          ],
                        ),
                      ),
                    ),
                  ]);
                } else {
                  return Container(
                    child: Center(
                      child: Text("Loading..."),
                    ),
                  );
                }
              }),
        ));
  }

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
