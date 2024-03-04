import { Component } from '@angular/core';
import { BusbookingService } from '../busbooking.service';

@Component({
  selector: 'app-agent2',
  templateUrl: './agent2.component.html',
  styleUrls: ['./agent2.component.css']
})
export class Agent2Component {
  ticket2:number[];
constructor(private busbookingservice2 : BusbookingService){
  this.ticket2 = this.busbookingservice2.getTicket();
}

bookticket2(val: any){
this.busbookingservice2.bookTicket(val)
this.ticket2 = this.busbookingservice2.getTicket();
}
}
