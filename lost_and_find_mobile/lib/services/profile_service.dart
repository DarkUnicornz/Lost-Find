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
    String officer,
    String first_name,
    String last_name,
    String email,
    String contact_nummber,
    String nic,
    String police_station,
    String password,
  ) {
    Logger().i("$officer");
    Logger().i("$first_name");
    Logger().i("$last_name");
    Logger().i("$email");
    Logger().i("$contact_nummber");
    Logger().i("$nic");
    Logger().i("$police_station");
    Logger().i("$password");

    return Dio().post('$baseUrl/officer/$officer', data: {
      "officer": officer,
      "first_name": first_name,
      "last_name": last_name,
      "email": email,
      "contact_number": contact_nummber,
      "nic": nic,
      "police_station": police_station,
      "password": password
    }).then((res) async {
      if (res.statusCode == 202) {
        Logger().i("${res.statusCode}");
        return true;
      }
      return false;
    }).catchError((err) {
      Logger().i("$err");
      return false;
    });
  }
}
