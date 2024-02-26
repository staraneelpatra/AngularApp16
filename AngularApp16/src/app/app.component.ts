import { Component } from '@angular/core';
import { SalutationPipePipe } from './salutation-pipe.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formSubmit(val : any){
    var data = val.controls;
    var name = data.yourname.value;
    var email = data.email.value;
    var mobile = data.mobile.value
    console.log(name, email, mobile);
  }
}
