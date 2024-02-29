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
      yourname : ['', [Validators.required,Validators.minLength(3)]],
      // You can use Validators.Compose for Multiple Validation or
      // just put it in array as below done for email and mobile
      email : ['', Validators.compose([Validators.required,Validators.email])],
      mobile : ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(12)]]
    });
  }
  
  ngModeldata = "";
   users={
    name: "",
    email: "",
    mobile: "",
 };

  formGet(){
    var name = this.contactForm.get("yourname")?.value;
    var email = this.contactForm.get("email")?.value;
    var mobile = this.contactForm.get("mobile")?.value
    console.log(name, email, mobile);    
  }

  formSet(){
    this.contactForm.setValue({"yourname": "Bageera", "email": "Asdf@hdg.cd", "mobile":9587369458});
  }

  formPatch(){
    this.contactForm.patchValue({"email": "Anbdfjk@hdg.cd"});
  }

  resetForm(){
    this.contactForm.reset();
  }
}
