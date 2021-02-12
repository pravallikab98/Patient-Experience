import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import {User} from "../models/user";
import {AngularFireAuth} from 'angularfire2/auth';
@Component({
  selector: 'app-search-food',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  @ViewChild('foodItem') foodItem: ElementRef;
  user = {} as User;
  constructor(private _http: HttpClient, private router: Router, private firebaseauth: AngularFireAuth) {
  }
     login(user:User) {
       try {
         this.firebaseauth.auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
           console.log(this.firebaseauth.auth.currentUser.uid);
           this.router.navigate(['/home']);
         }).catch(()=>{
           alert('Try again. Invalid Credentials');
         })
       }
       catch(e){
         console.error(e);
       }
     }

  register(user:User) {
    this.router.navigate(['/register']);
    try {
      this.firebaseauth.auth.createUserWithEmailAndPassword(user.email, user.password).then(function () {
        alert('Created successfully, Now Login');
        user.email='';
        user.password ='';
      }).catch(() =>
      {
        alert('invalid email/password should be of 6 characters');
      })
    }
    catch(e){
      console.error(e);
    }
  }
}
