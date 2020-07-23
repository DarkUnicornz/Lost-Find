import 'dart:convert';

class Post {
  final String itemId,
      nic,
      post_date,
      post_time,
      location,
      state,
      lostfound_date;

  Post(f,  
      {this.itemId,
      this.nic,
      this.post_date,
      this.post_time,
      this.location,
      this.state,
      this.lostfound_date});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
        itemId: json['itemId'],
        nic: json['nic'],
        post_date: json['post_date'],
        post_time: json['post_time'],
        location: json['location'],
        state: json['state'],
        lostfound_date: json['lostfound_date']);
  }
}
