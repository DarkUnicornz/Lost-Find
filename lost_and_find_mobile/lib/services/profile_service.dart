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
}
