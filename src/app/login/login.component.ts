import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  constructor(private _AuthService:AuthService , private _Router:Router ) { }

  isLoading:boolean= false;
  error:string=''
  message:string=""

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8) ,Validators.pattern(/^[A-Z]/)]),
  })

  submitLoginForm(loginForm:FormGroup) {
    this.isLoading = true;
    this._AuthService.signin(loginForm.value).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.message === 'Logged Successfully') {
          console.log(response.message);
          localStorage.setItem('userToken', response.token);
          this._AuthService.saveUserData();
          this._Router.navigate(['/myCourses']);
        } else {
          this.error = response.error;
          this.message = response.message;
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.error = 'An error occurred. Please try again later.';
      }
    });
  }


  ngOnInit(): void {
  }
}
