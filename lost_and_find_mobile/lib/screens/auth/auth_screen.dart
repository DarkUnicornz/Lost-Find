import 'package:lost_and_find_mobile/routes/Application.dart';
import 'package:lost_and_find_mobile/services/auth_service.dart';
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class UseremailValidator {
  static String validateEmail(String value) {
    if (value.isEmpty) {
      return 'Email cannot be empty';
    } else {
      Pattern pattern =
          r'^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$';
      RegExp regex = new RegExp(pattern);
      if (!regex.hasMatch(value))
        return 'Enter Valid Email';
      else
        return null;
    }
  }
}

class PasswordValidator {
  static String validate(String value) {
    if (value.isEmpty) {
      return 'password cannot be empty';
    } else if (value.length < 8) {
      return "password too short";
    }
    return " ";
  }
}

class AuthScreen extends StatefulWidget {
  @override
  _AuthScreenState createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  String _email, _password;
  bool _isLoading = false;
  GlobalKey<FormState> _formkey = new GlobalKey<FormState>();

  void _handleLogin(BuildContext context) {
    setState(() {
      _isLoading = true;
    });
    AuthService().login(_email, _password).then((res) {
      setState(() {
        _isLoading = false;
      });
      if (res) {
        Application.router.navigateTo(context, '/home', clearStack: true);
      } else {
        Scaffold.of(context).showSnackBar(SnackBar(
          content: Text("Invalid Credentials"),
          backgroundColor: Colors.redAccent,
        ));
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey,
      resizeToAvoidBottomInset: false,
      body: Form(
          key: _formkey,
          child: Stack(
            children: <Widget>[
              Container(
                height: 140,
                color: Color(0xfff57f17),
              ),
              Container(
                margin: EdgeInsets.fromLTRB(24.0, 70.0, 24.0, 0),
                child: Form(
                  key: _formkey,
                  child: Column(
                    children: <Widget>[
                      SizedBox(
                        height: 20.0,
                      ),
                      Container(
                        height: 100.0,
                        width: 100.0,
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(12.0),
                          boxShadow: [BoxShadow(blurRadius: 12.0)],
                        ),
                      ),
                      SizedBox(
                        height: 40.0,
                      ),
                      TextFormField(
                        onChanged: (value) {
                          setState(() {
                            _email = value;
                          });
                        },
                        style: TextStyle(fontSize: 14.0),
                        textAlign: TextAlign.center,
                        decoration: InputDecoration(
                          hintText: "Email",
                          contentPadding: EdgeInsets.all(0),
                          fillColor: Color(0xffc4dfe6),
                          filled: true,
                          border: InputBorder.none,
                          enabledBorder: OutlineInputBorder(
                            borderRadius:
                                BorderRadius.all(Radius.circular(4.0)),
                            borderSide: BorderSide(color: Color(0xff66a5ad)),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderRadius:
                                BorderRadius.all(Radius.circular(4.0)),
                            borderSide: BorderSide(
                                color: Color(0xff07575b), width: 1.5),
                          ),
                          errorBorder: OutlineInputBorder(
                            borderRadius:
                                BorderRadius.all(Radius.circular(4.0)),
                            borderSide:
                                BorderSide(color: Colors.redAccent, width: 1),
                          ),
                          focusedErrorBorder: OutlineInputBorder(
                            borderRadius:
                                BorderRadius.all(Radius.circular(4.0)),
                            borderSide:
                                BorderSide(color: Colors.redAccent, width: 1),
                          ),
                        ),
                        validator: (val) {
                          if (val.isEmpty) {
                            return 'National ID cannot be empty';
                          } else if (val.length != 10) {
                            return "Invalid National ID";
                          }
                        },
                      ),
                      SizedBox(
                        height: 20,
                      ),
                      TextFormField(
                        obscureText: true,
                        onChanged: (value) {
                          setState(() {
                            _password = value;
                          });
                        },
                        style: TextStyle(fontSize: 14.0),
                        textAlign: TextAlign.center,
                        decoration: InputDecoration(
                          hintText: "Password",
                          contentPadding: EdgeInsets.all(0),
                          fillColor: Color(0xffc4dfe6),
                          filled: true,
                          border: InputBorder.none,
                          enabledBorder: OutlineInputBorder(
                            borderRadius:
                                BorderRadius.all(Radius.circular(4.0)),
                            borderSide: BorderSide(color: Color(0xff66a5ad)),
                          ),
                          focusedBorder: OutlineInputBorder(
                            borderRadius:
                                BorderRadius.all(Radius.circular(4.0)),
                            borderSide: BorderSide(
                                color: Color(0xff07575b), width: 1.5),
                          ),
                          errorBorder: OutlineInputBorder(
                            borderRadius:
                                BorderRadius.all(Radius.circular(4.0)),
                            borderSide:
                                BorderSide(color: Colors.redAccent, width: 1),
                          ),
                          focusedErrorBorder: OutlineInputBorder(
                            borderRadius:
                                BorderRadius.all(Radius.circular(4.0)),
                            borderSide:
                                BorderSide(color: Colors.redAccent, width: 1),
                          ),
                        ),
                        validator: (val) {
                          if (val.isEmpty) {
                            return 'Password cannot be empty';
                          }
                        },
                      ),
                      SizedBox(
                        height: 20,
                      ),
                      Builder(
                        builder: (context) => Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: <Widget>[
                            FlatButton(
                                onPressed: () {
                                  if (_formkey.currentState.validate()) {
                                    _handleLogin(context);
                                  }
                                },
                                child: Text(
                                  'Login',
                                  style: TextStyle(color: Colors.white),
                                ),
                                color: Color(0xfff57f17),
                              ),
                          ],
                        ),
                      ),
                      SizedBox(
                        height: 20,
                      ),
                      FlatButton(
                        onPressed: (){
                          //Navigator.pushNamed(context, '/auth/register');
                        }, 
                        child: Text('Regiter'),
                      ),
                    ],
                  ),
                ),
              ),
              (_isLoading)
                ? Container(
                  color: Color(0xdd003b46),
                  child: Center(
                    child: CircularProgressIndicator(
                      valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                    ),
                  ),
                )
                : Container(),
            ],
          )),
    );
  }
}

// void _showErrorDialog(BuildContext context) {
//   showDialog(
//       context: context,
//       builder: (context) {
//         return AlertDialog(
//           title: Text('Material Dialog'),
//           content: Text('This is the context of the material dialog'),
//           actions: <Widget>[
//             FlatButton(
//               onPressed: () {
//                 print('HelloWorld!');
//                 _dismissDialog(context);
//               },
//               child: Text('Print HelloWord!'),
//             )
//           ],
//         );
//       });
// }

// _dismissDialog(BuildContext context) {
//   Navigator.pop(context);
// }
