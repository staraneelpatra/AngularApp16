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
    console.log(val);
    var name = val.yourname;
    var email = val.email;
    var mobile = val.mobile
    console.log(name, email, mobile);
  }
}
