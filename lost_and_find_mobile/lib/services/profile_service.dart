import 'package:dio/dio.dart';
import 'package:lost_and_find_mobile/config/config.dart';
import 'package:lost_and_find_mobile/model/user.dart';
import 'package:lost_and_find_mobile/services/auth_service.dart';
import 'package:shared_preferences/shared_preferences.dart';

class ProfService {
  final baseUrl = Config.baseUrl;

  Future<bool> changePass(String current_password, String new_password) async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String user = prefs.getString("user");

    return Dio().post('$baseUrl/user/$user/password-update', data: {
      "user_id": user,
      "password": current_password,
      "new_password": new_password
    }).then((res) async {
      if (res.statusCode == 202) {
        return true;
      }
      return false;
    }).catchError((err) {
      return false;
    });
  }
  Future<bool> editDetails(
    String nic,
    String password,
    String fName,
    String lName,
    String email,
    String phoneNo,
    String address,
    String dob,
    String gender,
  ) {

    return Dio().post('$baseUrl/user/$user', data: {
      "nic": nic,
      "password": password,
      "fName": fName,
      "lName": lName,
      "email": email,
      "phoneNo": phoneNo,
      "address": address,
      "dob": dob,
      "gender": gender,
    }).then((res) async {
      if (res.statusCode == 202) {
        return true;
      }
      return false;
    }).catchError((err) {
      return false;
    });
  }
  Future<User> getDetails() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String token = prefs.getString("token");
    User user;

    return Dio()
        .get(
      '$baseUrl/me?token=$token',
    )
        .then((res) async {


      if (res.statusCode == 200) {
        var f = res.data["data"];
        // user = User(
        //     f["nic"],
        //     f["password"],
        //     f["fName"],
        //     f["lName"],
        //     f["email"],
        //     f["phoneNo"],
        //     f["address"],
        //     f["dob"],
        //     f["gender"]);
        return user;
      }

      return user;
    }).catchError((err) => user);
  }
}
