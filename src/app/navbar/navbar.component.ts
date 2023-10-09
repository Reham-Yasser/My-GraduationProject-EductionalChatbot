import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router:Router) { }
  isLogin:boolean = false;
  logOut(){
   this._AuthService.signOut()
  }
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:() => {
        if (this._AuthService.userData.getValue() != null) {
          this.isLogin = true
        }
        else {
          this.isLogin = false
        }
      }
    })

  }
}
