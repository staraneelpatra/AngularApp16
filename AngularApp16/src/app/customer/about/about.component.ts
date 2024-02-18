import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name  = "";
  id = "";
  constructor(private route : ActivatedRoute) {}
  
  ngOnInit(): void{
    this.route.params.subscribe(params =>{
      console.log(params)
      this.name = params['username'];
      this.id = params['id'];
    })
    this.route.queryParams.subscribe(params =>{
      console.log(params)
      this.name = params['username'];
      this.id = params['id'];
    })
  }
}
