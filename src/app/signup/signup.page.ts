import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUpData = {
    name: '',
    email: '',
    password: ''
  }
  constructor(
    public fireService: FireserviceService
  ) { }

  ngOnInit() {
  }

  signUp() {
    if (!this.signUpData.name) {
      alert('Enter name!');
      return;
    }
    if (!this.signUpData.email) {
      alert('Enter Email!');
      return;
    }
    if (!this.signUpData.password) {
      alert('Enter Password!');
      return;
    }
    this.fireService.signup(this.signUpData).then((res: any) => {
      if (res.user.uid) {
        const data = {
          email: this.signUpData.email,
          name: this.signUpData.name,
          password: this.signUpData.password,
          uid: res.user.uid
        };
        this.fireService.saveDetails(data).then((response: any) => {
          alert('Account Created!');
        }, (error: any) => {
          console.log(error);
        });
      }
    }, (err: any) => {
      console.log(err);
    });
  }
}
