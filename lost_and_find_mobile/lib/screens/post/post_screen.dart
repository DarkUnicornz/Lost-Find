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
  final _fineFormKey = new GlobalKey<FormState>();

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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Send Post"),
      ),
      body: Container(
        child: Center(
          child: Text("Post Page"),
        ),
      ),
    );
  }
}
