import 'package:flutter/material.dart';
import 'package:lost_and_find_mobile/model/post.dart';
import 'package:lost_and_find_mobile/routes/Application.dart';
import 'package:lost_and_find_mobile/services/post_service.dart';

class PostScreen extends StatefulWidget {
  @override
  _PostScreenState createState() => _PostScreenState();
}

class _PostScreenState extends State<PostScreen> {
  bool isEnabled;
  final _postFormKey = new GlobalKey<FormState>();

  @override
  void initState() {
    super.initState();
    isEnabled = true;
    var post = '';
  }

  Future _handlePostIssueed(Post post) async {
    await PostService()
        .sendPost(post.nic, post.post_date, post.post_time, post.location,
            post.state, post.lostfound_date)
        .then((res) async {
      if (res) {
        isEnabled = true;
        showDialog(
            context: context,
            builder: (BuildContext context) {
              return AlertDialog(
                title: Text("Success"),
                actions: <Widget>[
                  FlatButton(
                      onPressed: () {
                        Navigator.of(context).pop();
                        Application.router
                            .navigateTo(context, '/home', clearStack: true);
                      },
                      child: Text("Okay"))
                ],
              );
            });
      } else {
        isEnabled = true;
        showDialog(
            context: context,
            builder: (BuildContext context) {
              return AlertDialog(
                title: Text("Error"),
                actions: <Widget>[
                  FlatButton(
                      onPressed: () {
                        Navigator.of(context).pop();
                      },
                      child: Text("Okey"))
                ],
              );
            });
      }
    });
  }

  String nic, location,state;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: Form(
          key: _postFormKey,
          child: Column(
            children: <Widget>[
              SizedBox(
                height: 40,
              ),
              Text(
                "Fill in the details to post",
                style: TextStyle(fontSize: 20),
              ),
              SizedBox(
                height: 5,
              ),
              TextFormField(
                decoration: new InputDecoration(
                  labelText: "NIC",
                  fillColor: Colors.white,
                  border: new OutlineInputBorder(
                    borderRadius: new BorderRadius.circular(25.0),
                    borderSide: new BorderSide(),
                  ),
                ),
                onChanged: (value) {
                  setState(() {
                    nic = value;
                  });
                },
                validator: (val) {
                  if (val.length == 0) {
                    return "nid number cannot be empty";
                  } else if (val.length != 10 || val.length != 12) {
                    return "nid number not valid";
                  }
                },
                style: new TextStyle(
                  fontFamily: "Poppins",
                ),
              ),
              SizedBox(
                height: 20,
              ),
              TextFormField(
                decoration: new InputDecoration(
                  labelText: "location",
                  fillColor: Colors.white,
                  border: new OutlineInputBorder(
                    borderRadius: new BorderRadius.circular(25.0),
                    borderSide: new BorderSide(),
                  ),
                ),
                onChanged: (value) {
                  setState(() {
                    location = value;
                  });
                },
                validator: (val) {
                  if (val.length == 0) {
                    return "location cannot be empty";
                  }
                },
                style: new TextStyle(
                  fontFamily: "Poppins",
                ),
              ),
              SizedBox(
                height: 20,
              ),
              TextFormField(
                decoration: new InputDecoration(
                  labelText: "state",
                  fillColor: Colors.white,
                  border: new OutlineInputBorder(
                    borderRadius: new BorderRadius.circular(25.0),
                    borderSide: new BorderSide(),
                  ),
                ),
                onChanged: (value) {
                  setState(() {
                    state = value;
                  });
                },
              ),
              SizedBox(
                height: 20,
              ),
              // RaisedButton(
              //   onPressed: () async {
              //     if (_postFormKey.currentState.validate()) {
              //       if (isEnabled) {
              //         isEnabled = false;
              //         Post p = new Post(itemId: );
              //       }
              //     }
              //   },
              // )
            ],
          ),
        ),
      ),
    );
  }
}
