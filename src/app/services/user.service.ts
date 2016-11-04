import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  login(email: string, password: string) {
    //log the user in with their email and password
    //store the access token and user id with the identity service
    //return the user id or an error
  }

  logout() {
    //log the user out
    //return null or an error
  }

  me() {
    //fetch the logged in user using the identity service user id
    //return a User object
  }

}
