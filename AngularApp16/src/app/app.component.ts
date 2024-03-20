import { Component } from '@angular/core';
import { SalutationPipePipe } from './salutation-pipe.pipe';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';
import { UserdataService } from './userdata.service';
import { UseraddressService } from './useraddress.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //Using Service Component Level
  //providers: [UserdataService]
})
export class AppComponent {

    userdata: any =[];
    constructor(private userdataservice :UserdataService){     
     let userdata = this.userdataservice.getUserData().subscribe(usersdata=>{
      console.log(usersdata);
      this.userdata = usersdata;
     })
}
  
}
