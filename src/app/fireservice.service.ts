import { Injectable } from "@angular/core";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: "root",
})
export class FireserviceService {
  constructor(
    public fireStore: AngularFirestore,
    public auth: AngularFireAuth
  ) { }

  loginWithEmail(data: any) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  signup(data: any) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  saveDetails(data: any) {
    return this.fireStore.collection("users").doc(data.uid).set(data);
  }

  /*getDetails(data: any) {
    return this.fireStore.collection("users").doc(data.uid).valueChanges();
  }*/

  getAllDetails() {
    return this.fireStore.collection("users").get();
  }
}

