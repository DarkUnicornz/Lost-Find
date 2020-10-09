export class User {
  nic: string;
  username: string;
  lName: string;
  email: string;
  phone: number;
  address: string;
  bDay: Date;
  gender: string;
  password: string;

  // constructor(id: string, username: string, email: string, password: string) {
  //   this.id = id;
  //   this.username = username;
  //   this.email = email;
  //   this.password = password;
  // }
}

export class UserDetail{
    id :number
     nic :string;
     username :string;
     fName :string;
     lName :string;
     email :string;
     phone :string;
     address :string;
     bDay :string;
     gender :string;    
     roles : [string];
     
}
