import 'dart:convert';

class Post {
  final String
      nic,
      location,
      state,
      lostfound_date;

  Post(
      {
      this.nic,
      this.location,
      this.state,
      this.lostfound_date});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
        //itemId: json['itemId'],
        nic: json['nic'],
        location: json['location'],
        state: json['state'],
        lostfound_date: json['lostfound_date']);
  }
}
