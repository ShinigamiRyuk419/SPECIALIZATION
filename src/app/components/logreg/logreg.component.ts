import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { AuthService } from './../../shared/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TokenService } from '../../shared/token.service';
import { AuthStateService } from '../../shared/auth-state.service';
import { NgToastService } from "ng-angular-popup";

declare var switchForm: any;
declare var validation: any;


@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent  implements OnInit {

  isSignedIn!: boolean;

  registerForm: FormGroup;
  loginForm: FormGroup;
  adminForm: FormGroup;
  errors: any = null;

  // constructor(private http:HttpClient){}
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
    private toast: NgToastService
  ) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: [''],
    });

    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });

    this.adminForm = this.fb.group({
      email: ['admin@gmail.com'],
      password: ['admin'],
    });
  }

adminsubmit(){
  new validation();
  // this.errors = error.error;
  this.router.navigate(['/admindashboard']);
}

  onSubmitr() {
    this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
        this.toast.success({detail:"Registered successfully", summary: 'Please login with your new credentials', duration:3000});
      },
      (error) => {
        this.errors = error.error;
        this.toast.error({detail:"Invalid inputs", summary: 'make sure email and password is valid', duration:3000});
      },
      () => {
        this.registerForm.reset();
        this.router.navigate(['/logreg']);
      }
    );
  }

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
        this.toast.success({detail:"Login successful", summary: 'redirecting....', duration:3000});
      },
      (error) => {
        this.errors = error.error;
        this.toast.error({detail:"Invalid Credentials", summary: 'Please input the correct credentials', duration:3000});
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['/admindashboard']);
      }
    );
  }



  ngOnInit(): void {
    new switchForm();

  }

  // for login
  // Handle response
  responseHandler(data:any) {
    this.token.handleData(data.access_token);
  }

}
