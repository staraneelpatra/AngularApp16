import { Component } from '@angular/core';
import { SalutationPipePipe } from './salutation-pipe.pipe';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';
import { UserdataService } from './userdata.service';
import { UseraddressService } from './useraddress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //Using Service Component Level
  //providers: [UserdataService]
})
export class AppComponent {

    userdata$: Observable<any>;
    constructor(private userdataservice :UserdataService){     
    this.userdata$ = this.userdataservice.getUserData();
}  
}
