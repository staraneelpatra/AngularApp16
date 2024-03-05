import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
//Module level can be done 2 ways as below line 4 and line 8 
@Injectable({
  providedIn: 'root'
})

//Module level need to be declared as below and add Providers: [UserdataService] in app.module.ts

//@Injectable()
export class UserdataService {

  constructor(private http : HttpClient) {}

   getUserData(){

    let apiurl = 'https://jsonplaceholder.typicode.com/users'
    return this.http.get(apiurl);
   }

}
