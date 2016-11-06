import { Injectable } from '@angular/core';

import {HttpService} from "./http.service";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {CookieService} from 'angular2-cookie/core';

import 'rxjs/add/operator/toPromise';
import {User} from "../models/user";

@Injectable()
export class UserService {
  private _userId: string;
  //TODO - the name of your cookie should unique per app
  get userId(): string {
    return this.cookieService.get("ng2spuid")
  }

  set userId(id: string) {
    this.cookieService.put("ng2spuid", id)
  }

  constructor(
      private httpService: HttpService,
      private toastr: ToastsManager,
      private cookieService: CookieService
  ) {}

  me(): Promise<User> {
    var me = this;
    return this.httpService.get(`/ZMUsers/${this.userId}`, {})
        .then(function(result: any){
          var user:User = new User().fromJson(result);
          console.log("Fetched logged in User", user);
          return user
        })
        .catch(function(error: any){
          me.httpService.handleError(error, "Unable to retrieve logged in user")
        })
  }
  logout(): Promise<any> {
    var me = this;
    return this.httpService.post("/ZMUsers/logout", {})
        .then(function(result: any){
          me.httpService.accessToken = null;
          me.userId = null;
          return {success: true};
        })
        .catch(function(error: any) {
          me.httpService.handleError(error, "Logout Failed")
        })
  }

  login(email: string, password: string): Promise<any> {
    let params: any = {email: email, password: password};
    var me = this;
    return this.httpService.post("/ZMUsers/login", params)
        .then(function(result: any){
          me.httpService.accessToken = result.id;
          me.userId = result.userId;
          //fetch this user and store their account Id
          return me.httpService.get(`/ZMUsers/${result.userId}`, {})
              .then(function(result: any){
                if (result) {
                  console.log("Fetched User", result);
                  return result;
                }

              })
        })
        .catch(function(error: any): Promise<any> {
          if (error.status === 401 || error.status === 403) {
            me.toastr.error("Email or Password is not Valid");
          } else {
            me.toastr.error("Login Failed")
          }
          return null;
        })
  }
}
