import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalutationPipePipe } from './salutation-pipe.pipe';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserdataService } from './userdata.service';
import { UseraddressService } from './useraddress.service';
import { Agent1Component } from './agent1/agent1.component';
import { Agent2Component } from './agent2/agent2.component';
import { BusbookingService } from './busbooking.service';

@NgModule({
  declarations: [
    AppComponent,
    SalutationPipePipe,
    HomeComponent,
    PagenotfoundComponent,
    Agent1Component,
    Agent2Component,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    CustomerModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [BusbookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
