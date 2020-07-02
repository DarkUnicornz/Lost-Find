import 'package:circular_bottom_navigation/tab_item.dart';
import 'package:flutter/material.dart';
import 'package:lost_and_find_mobile/screens/post/post_screen.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  String _title;

  static List<TabItem> _navItems = List.of([
    new TabItem(Icons.format_list_bulleted, "Post", Color(0xff07575b)),
    new TabItem(Icons.person, "Profile", Color(0xff07575b)),
    //new TabItem(Icons.as, "Post", Color(0xff07575b)),
  ]);

  static List<Widget> _screens = [
    PostScreen(),
  
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Welcome to Lost&Found_App'),
      ),
      body: Center(
        child: Text('Hello World'),
      ),
    );
  }
}
