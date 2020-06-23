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
  static final _formkey = new GlobalKey<FormState>();
  final scaffoldKey = GlobalKey<ScaffoldState>();
  bool isenabled;
  @override
  void initState() {
    super.initState();
    isenabled = true;
  }

  Future _handleLogin(
    String _email,
    String _password,
    BuildContext context,
  ) async {
    AuthService().login(_email, _password).then((res) {
      if (res) {
        Application.router.navigateTo(context, '/home', clearStack: true);
      } else {
        isenabled = true;
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: scaffoldKey,
      body: Form(
          key: _formkey,
          child: Column(
            children: <Widget>[
              SizedBox(
                height: 50,
              ),
              Expanded(
                child: Container(
                  width: 200,
                  height: 200,
                  child: Image.asset("lib/image/login_image.png"),
                ),
              ),
              SizedBox(
                height: 20,
              ),
              TextFormField(
                obscureText: false,
                onChanged: (value) {
                  setState(() {
                    _email = value;
                  });
                },
                decoration: new InputDecoration(
                  labelText: "User email",
                  fillColor: Colors.white,
                  border: new OutlineInputBorder(
                    borderRadius: new BorderRadius.circular(25.0),
                    borderSide: new BorderSide(),
                  ),
                ),
                validator: UseremailValidator.validateEmail,
                keyboardType: TextInputType.text,
                style: new TextStyle(
                  fontFamily: "Poppins",
                ),
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
                decoration: new InputDecoration(
                  labelText: "Password",
                  fillColor: Colors.white,
                  border: new OutlineInputBorder(
                    borderRadius: new BorderRadius.circular(25.0),
                    borderSide: new BorderSide(),
                  ),
                ),
                validator: PasswordValidator.validate,
                keyboardType: TextInputType.text,
                style: new TextStyle(
                  fontFamily: "Poppins",
                ),
              ),
              SizedBox(
                height: 10,
              ),
              RaisedButton(
                onPressed: () {
                  if (_formkey.currentState.validate()) {
                    if (isenabled) {
                      isenabled = false;
                      _handleLogin(_email, _password, context);
                    } else {
                      return null;
                    }
                  }
                },
                textColor: Colors.white,
                child: const Text('Login', style: TextStyle(fontSize: 20)),
                color: Colors.lightBlue,
              ),
              Expanded(
                child: Container(),
              )
            ],
          )),
    );
  }
}

void _showErrorDialog(BuildContext context) {
  showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text('Material Dialog'),
          content: Text('This is the context of the material dialog'),
          actions: <Widget>[
            FlatButton(
              onPressed: () {
                print('HelloWorld!');
                _dismissDialog(context);
              },
              child: Text('Print HelloWord!'),
            )
          ],
        );
      });
}

_dismissDialog(BuildContext context) {
  Navigator.pop(context);
}
