import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  isLoading: boolean = false;
  error: string = ""
  message: string = ""
  
  registerForm: FormGroup = new FormGroup({
    DisplayName: new FormControl(null, [Validators.minLength(3), Validators.required, Validators.maxLength(20)]),
    FristName: new FormControl(null, [Validators.minLength(3), Validators.required, Validators.maxLength(10)]),
    LastName: new FormControl(null, [Validators.minLength(3), Validators.required, Validators.maxLength(10)]),
    Password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern(/^[A-Z]/)]),
    Email: new FormControl(null, [Validators.email, Validators.required]),
    age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(90)]),
  })
  submitRegisterForm(registerForm: FormGroup) {
    this.isLoading = true
    console.log("submit");
    console.log(registerForm.value);
    
    this._AuthService.signup(registerForm.value).subscribe({
      next: (response) => {
        console.log("success");
        this.isLoading = false
        if (response.message == "Register Successfly") {
          this._Router.navigate(['/track'])
        }
        else {
          console.log(true);
          this.error = response.error
          this.message = response.message
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.error = 'An error occurred. Please try again later.';
      }
    })
  }

  ngOnInit(): void {

  }
}
