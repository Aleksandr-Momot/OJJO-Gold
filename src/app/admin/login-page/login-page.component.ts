import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/interfaces';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;
  message: string;
  constructor( private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {


    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }


  submit() {
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }
    
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };

  }
}
