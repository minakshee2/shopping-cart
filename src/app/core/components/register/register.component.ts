import { Component, OnInit } from '@angular/core';
import { Register } from './register.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  // registerUser: register = new register('john_doe', 'john@example.com');
  register: Register = {};
  errorMsg = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.register = {
      name: 'Bob',
    };
  }

  onSubmit(form: NgForm) {
    // if (form.valid) {
    //   console.log('Form submitted with values:', form.value);
    // } else {
    //   console.log('Form is invalid');
    // }

    if (form && form.valid) {
      // const userName = form.form.value.userName;
      // const password = form.form.value.password;

      //this.authService.login(userName, password);

      // Navigate to the Product List page after log in.
      // if (this.authService.redirectUrl) {
      //   this.router.navigateByUrl(this.authService.redirectUrl);
      // } else {
      //   this.router.navigate(['/products']);
      // }

      this.router.navigate(['/login']);
    } else {
      this.errorMsg = 'Please enter a user name and password.';
    }
  }
}
