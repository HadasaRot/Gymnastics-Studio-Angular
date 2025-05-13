import { Component } from '@angular/core';
import { FormControl, NgModel, ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,FormsModule, MatFormFieldModule, MatInputModule,MatButton,MatTooltip], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm: FormGroup;
  user:any;
  constructor(private fb: FormBuilder ,public userService: UsersService,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
   
  onSubmit(): void {
    this.user = this.userService.getUserByEmail(this.loginForm.value.email);
    if(!this.user){
      alert("user does not exist.")
      return;
    }
    if (this.user.password !== this.loginForm.value.password) {
      alert("incorrect password");
      return;
    }
    if (this.loginForm.valid) {
      this.user.role == "teacher"? this.router.navigate(['lessonList']):this.router.navigate(['registrantsList']);
    } else {
      alert("incorrect email and password");
    }
  }
  onclick() {
    alert(this.loginForm.value.email);
    alert(this.loginForm.value.password);
  }
}
