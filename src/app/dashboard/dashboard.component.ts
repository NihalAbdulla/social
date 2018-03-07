import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userId: string;
  loading = false;

  constructor (private route: ActivatedRoute,
    private router: ActivatedRoute,
    private userService : UserService,
    private actRoute: ActivatedRoute)  { 
    
         this.router.queryParams.subscribe(params => {           
                this.userId = params["id"];          
            });
            console.log("HELOOOOOOOO");
            console.log(this.userId);
      }

  ngOnInit() {
    this.getProfileDetails();
  }

  getProfileDetails() {
    this.loading = true;    
    this.userService.getUserProfile(this.userId)
        .subscribe(
            data => {
               console.log(data);       
              },
          error => {
              this.loading = false;
          });   
   
  }

}
