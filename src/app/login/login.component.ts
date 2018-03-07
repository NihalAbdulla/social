import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    model:  User;
    loading = false;
    firstname : string;
    lastname : string;
    fromRegister: string;
    showInvalidUser: boolean= false;
    showUserRegistered: boolean= false;
    returnUrl: string;
    logged : boolean =false;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService : AuthenticationService,
      private actRoute: ActivatedRoute

      ) { 

          this.actRoute.queryParams.subscribe(params => {
     
          this.fromRegister = params["fromRegister"];
      });

      }

      ngOnInit() {
        this.model = new User();
        // get return url from route parameters or default to '/'
        this.returnUrl = 'dashboard';
        if(this.fromRegister =="yes"){
             this.showUserRegistered =true;
        }
    }

  login() {
    this.loading = true;
    this.showUserRegistered = false;
    this.authenticationService.login(this.model)
        .subscribe(
            data => {
               
              let navigationExtras: NavigationExtras = {
                queryParams: {
                "username": data.username
              }
        };
        this.router.navigate([this.returnUrl],navigationExtras);
            },
            error => {
                this.showInvalidUser=true;
                this.loading = false;
            });
   
   
}
  fbLogin() {
    this.authenticationService.fbLogin().then((Response) => {

      let navigationExtras: NavigationExtras = {
        queryParams: {
          "username": Response.username       // IDE error so chill
        }
      };
      this.router.navigate([this.returnUrl], navigationExtras);
    });
  }

}

