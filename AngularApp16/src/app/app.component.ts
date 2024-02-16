import { Component } from '@angular/core';
import { SalutationPipePipe } from './salutation-pipe.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorial';
  text = "Welcome to Tutorial";
  textfromtarget = ""; 
  textfromtargetNgModule = "";
  isdisabled = "disabled";
  isreadonly = false;
  isloggedIn = false;
  isChecked = false;
  textForPropertyBinding = "For Property Bindning";
  getSelectedColor = "";
  website = {
  loginPanel : "Welcome to Login Panel",
  imageUrl : "https://angular.io/assets/images/logos/angular/logo-nav@2x.png",
  siteUrl : "",
  };

  car = {
    Ford : ["Figo", "Freestyle", "Classic", "Ikon", "Aspire", "Escort", "Ecosport", "Endevour"],
    Chevy : ["Beat", "Spark", "Camero", "Corvette"]
  }

  Myarray = [
    {name: "Anil", Gender: "Male", Age : 33, Car : "Ford"},
    {name: "Manmay", Gender: "Male", Age : 30, Car : "Citreon"},
    {name : "Satya", Gender: "Male", Age : 31, Car : "Suzuki"},
    {name : "Katrina", Gender: "Female", Age : 30, Car : "Hyundai"},
    {name : "Hema", Gender: "Female", Age : 30, Car : "MG"}
  ];

  Price =[100, 342, 199, 739, 409];

  myEvent(text:string){
    alert(text);
  }

  myKeyUpEvent(text:string){
    alert(text);
  }

  mouseOver(){
    alert("Mouse Over Event trigger");
  }

  myRealTimeEvent(event: KeyboardEvent){
    if ((event.target as HTMLInputElement)?.value) {
      this.textfromtarget = (event.target as HTMLInputElement).value;
    }  
  }
    doSomething(){  
      if(this.isChecked==true){
        console.log('checkbox is checked');
      }
      else{
        console.log('checkbox is unchecked');
      }
    }  
    Login(){
      if (this.isChecked == true) {
        this.isloggedIn = true;
      }
      else
      this.isloggedIn = false;
    }
    GetSelectedValue(data : Event){
      this.getSelectedColor = (data.target as HTMLInputElement).value;
    }
}
