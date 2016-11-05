import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      private userService: UserService,
      private router: Router
  ) { }
  email: string = "";
  password: string = "";
  ngOnInit() {

  }
  login() {
    var me = this;
    this.userService.login(this.email, this.password)
    .then(function(result){
      //if we didn't get a user back this was an error that the service
      //will be handling
      if (result) {
        me.router.navigate(['/dashboard'])
      }
    })
  }

}
