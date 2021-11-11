import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginData = {
    email: '',
    password: ''
  }
  constructor(
    public router: Router,
    public fireService: FireserviceService
  ) { }

  ngOnInit() {
  }


  login() {
    if (!this.loginData.email) {
      alert('Enter Email!');
      return;
    }
    if (!this.loginData.password) {
      alert('Enter Password!');
      return;
    }
    this.fireService.loginWithEmail(this.loginData).then((res: any) => {
      if (res.user.uid) {
        localStorage.userID = res.user.uid;
        this.router.navigateByUrl('/tabs/tabs/tab1')
      }
    }, (err: any) => {
      console.log(err);
    });
  }


  signUp() {
    this.router.navigateByUrl('signup');
  }
}
