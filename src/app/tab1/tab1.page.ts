import { FireserviceService } from './../fireservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public list: any = [];
  public loginUserId: any;
  constructor(public fireService: FireserviceService) {
    this.loginUserId = localStorage.userID;
    this.getAllLoginDetails();
  }

  getAllLoginDetails() {
    this.fireService.getAllDetails().subscribe((res: any) => {
      this.list = res.docs.map((e: any) => {
        return {
          id: e.data().uid,
          name: e.data()['name'],
          email: e.data()['email'],
        };
      });
      console.log(this.list);
    }, (err: any) => {
      console.log(err);
    });
  }

  viewUserDetails(val: any) {
    console.log(val);
  }
}
