import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userId: string;
  loading = false;
  returnUrl: string;

  constructor (private route: ActivatedRoute,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private userService : UserService,
    private actRoute: ActivatedRoute)  { 
    
         this.activatedRouter.queryParams.subscribe(params => {           
                this.userId = params["id"];          
            });
            console.log("HELOOOOOOOO");
            console.log(this.userId);
      }

  ngOnInit() {
    this.getProfileDetails();
    this.returnUrl='chatbox'
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

  chatBox(toUserID){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "userId":this.userId,
        "toUserId": toUserID
      }
    }
    this.router.navigate([this.returnUrl],navigationExtras);
  }

}
