import { Injectable } from '@angular/core';
import { UseraddressService } from './useraddress.service';

//Module level can be done 2 ways as below line 4 and line 8 
// @Injectable({
//   providedIn: 'root'
// })

//Module level need to be declared as below and add Providers: [UserdataService] in app.module.ts

@Injectable()
export class UserdataService {

  constructor(private userAddressService : UseraddressService) { }

  getUserData(){
    return{
      name:"Pradeep",
      email:"Tiger@In.Town",
      mobile:"9154424839",
      address: this.userAddressService.getUserAddress().address
    }
  }
}
