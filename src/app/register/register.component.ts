import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { mustMatch, UsernameValidators } from './username.Validators'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern("^[a-zA-Z'-]+$"), UsernameValidators.cannotContainSpace]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmpassword: new FormControl('', [Validators.required]),
      course:new FormControl( '', [Validators.required]),
      email:new FormControl ('', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      gender: new FormControl('',[ Validators.required]),
      phone:new FormControl ('',[ Validators.required,Validators.pattern("[0-9]{10}")]),
      address:new FormControl('',[ Validators.required,Validators.pattern("^[0-9a-zA-Z'-]+$")]),
      //acceptTerms:new FormControl ([false, Validators.requiredTrue])
    }, {
      validator: mustMatch('password', 'confirmpassword')
    });
  }

  // convenience getter for easy access to form fields
  // get f() { 
  //   return this.registerForm.controls;
  //  }

   get username(){
    return this.registerForm.get('username');

  }

  get password(){
    return this.registerForm.get('password');

  }

  get confirmpassword(){
    return this.registerForm.get('confirmpassword');

  }
  get course(){
    return this.registerForm.get('course');

  }
  get email(){
    return this.registerForm.get('email');

  }
  get gender(){
    return this.registerForm.get('gender');

  }
  get phone(){
    return this.registerForm.get('phone');

  }
  get address(){
    return this.registerForm.get('address');
  }

  get acceptTerms(){
    return this.registerForm.get('acceptTerms');
  }

}
