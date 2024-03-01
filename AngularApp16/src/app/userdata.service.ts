import { Injectable } from '@angular/core';

//Module level can be done 2 ways as below line 4 and line 8 
// @Injectable({
//   providedIn: 'root'
// })

//Module level need to be declared as below and add Providers: [UserdataService] in app.module.ts
//@Injectable()
export class UserdataService {

  constructor() { }

  getUserData(){
    return{
      name:"Pradeep",
      email:"Tiger@Town.c",
      mobile:"9154424839"
    }
  }
}
