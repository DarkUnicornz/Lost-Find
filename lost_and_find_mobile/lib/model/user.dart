class User {
  final String nic,
      password,
      fName,
      lName,
      email,
      phoneNo,
      address,
      age,
      gender;

  User(
      {this.nic,
      this.password,
      this.fName,
      this.lName,
      this.email,
      this.phoneNo,
      this.address,
      this.age,
      this.gender});

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      nic: json['nic'],
      fName: json['first_name'],
      lName: json['last_name'],
      email: json['email'],
      phoneNo: json['phone_number'],
      address: json['address'],
      age: json['age'],
      gender: json['gender']
    );
  }
}
