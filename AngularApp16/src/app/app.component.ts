import { Component } from '@angular/core';
import { SalutationPipePipe } from './salutation-pipe.pipe';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contactForm: FormGroup;

  constructor( private fb :FormBuilder){
    this.contactForm = fb.group({
      yourname : ['', Validators.required],
      email : ['', Validators.required],
      mobile : ['', Validators.required,Validators.min(10),Validators.max(12)]
    });
  }
  
  ngModeldata = "";
   users={
    name: "",
    email: "",
    mobile: "",
 };

  formSubmit(val : any){
    console.log(val);
    var name = val.yourname;
    var email = val.email;
    var mobile = val.mobile
    console.log(name, email, mobile);    
  }
}
