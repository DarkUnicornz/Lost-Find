import 'package:circular_bottom_navigation/circular_bottom_navigation.dart';
import 'package:circular_bottom_navigation/tab_item.dart';
import 'package:flutter/material.dart';
import 'package:lost_and_find_mobile/screens/post/post_screen.dart';
import 'package:lost_and_find_mobile/screens/profile/profile_screen.dart';

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

  static List<Widget> _screens = [PostScreen(), ProfileScreen()];

  CircularBottomNavigationController _navController =
      new CircularBottomNavigationController(0);

  void _setTitle() {
    //_title = (_navController.value.isOdd) ? "Profile" : "Fines";
    if (_navController.value == 0) {
      _title = "Post";
    } else if (_navController.value == 1) {
      _title = "Profile";
    }
  }

  @override
  void initState() {
    _setTitle();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey,
      body: Stack(
        children: <Widget>[
          Container(
            height: 138,
            color: Color(0xff003b46),
            child: Center(
              child: Text(
                _title,
                style: TextStyle(color: Colors.white, fontSize: 20.0),
              ),
            ),
          ),
          Container(
            child: _screens.elementAt(_navController.value),
          ),
          Container(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                CircularBottomNavigation(
                  _navItems,
                  iconsSize: 24.0,
                  barBackgroundColor: Colors.white,
                  normalIconColor: Color(0xff07575b),
                  controller: _navController,
                  selectedCallback: (navIndex) {
                    setState(() {
                      _navController.value = navIndex;
                      _setTitle();
                    });
                  },
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
