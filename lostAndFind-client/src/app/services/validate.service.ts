import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.nic === undefined || user.fName === undefined ||  user.lName === undefined || user.email === undefined ||  user.phone === undefined ||  user.address === undefined ||  user.bDay === undefined ||  user.gender === undefined || user.password === undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateLogin(email, password) {
    if (email === undefined || password === undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
   // if (user.username === !undefined && user.password === !undefined) {
      // const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // return regex.test(String(email).toLowerCase());
      return (String(email));
   // }
  }

  // validatePost(post){
  //   return true;
  // }
}
