import 'package:flutter/material.dart';

class PostScreen extends StatefulWidget {
  @override
  _PostScreenState createState() => _PostScreenState();
}

class _PostScreenState extends State<PostScreen> {
  bool isEnabled;

  @override
  void initState() {
    super.initState();
    isEnabled = true;
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
