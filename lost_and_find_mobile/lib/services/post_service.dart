import 'dart:async';
import 'package:dio/dio.dart';
import 'package:logger/logger.dart';
import 'package:lost_and_find_mobile/config/config.dart';
import 'package:lost_and_find_mobile/model/post.dart';
import 'package:geolocator/geolocator.dart';

class PostService {
  final baseUrl = Config.baseUrl;

  // Future<List<dynamic>> fetchActivePost() {
  //   return PrefService().getToken().then((token) {
  //     return Dio().get(';$baseUrl/me/?token=$token').then((me) {
  //       String uri = '$baseUrl/fines/driver/${me.data['data']['nid']}';

  //       return Dio().get(uri).then((res) {}).catchError((error) {
  //         Logger().e(error);
  //       });
  //     }).catchError((error) {
  //       Logger().e(error);
  //     });
  //   }).catchError((error) {
  //     Logger().e(error);
  //   });
  // }
  Future<Position> _getCurrentLocation() async {
    return await Geolocator()
        .getCurrentPosition(desiredAccuracy: LocationAccuracy.high);
  }

  Future<List<Post>> getPosts() async {
    return await Dio()
        .get(
      '$baseUrl/dashboard',
    )
        .then((res) async {
      Logger().i("$res");
      List<Post> posts = [];
      Logger().i("here: ${res.data["data"]}");
      int length = res.data["data"].length;
      if (res.statusCode == 200) {
        Logger().i("$length");
        //Logger().i("nlknklnlk${res.data["data"]["fines"]}");
        Logger().i("vdjskbvjkdsbvkbdskvbds");

        for (int i = 0; i < length; i++) {
          var f = res.data["data"][i];
          Logger().i("huk    ${f["posted_at"]}");
          String date = f["posted_at"];
          List dates = date.split('T');
          List times = dates[1].split(".");
          Post post = Post(
            f["itemId"],
              f["nic"],
              f["post_date"],
              f["post_time"],
              f["location"],
              f["state"],
              f["lostfound_date"]); //need to add other parameters
          posts.add(post);
          Logger().i("safaf0${posts.length}");
        }
        return posts;
      }
      Logger().i("return false");
      return false;
    }).catchError((err) => false);
  }

  Future<bool> publishPost(String nic, String location, String state) async {
    Position _currentPosition = await _getCurrentLocation();
    String lat = _currentPosition.latitude.toString();
    String long = _currentPosition.longitude.toString();

    List<Placemark> placemark = await Geolocator().placemarkFromCoordinates(
        _currentPosition.latitude, _currentPosition.longitude);
    Placemark place = placemark[0];
    String address = "${place.locality},${place.postalCode},${place.country}";
    Object location_string =
        {"name": address, "longitude": long, "latitude": lat}.toString();

    return Dio().post('$baseUrl/dashboard/post', data: {
      "itemId": "",
      "nic": nic,
      "post_date": "",
      "post_time": "",
      "location": location,
      "state": state,
      "lostfound_date": ""
    }).then((res) async {
      if (res.statusCode == 201) {
        return true;
      }
    }).catchError((err) {
      return false;
    });
  }
}
