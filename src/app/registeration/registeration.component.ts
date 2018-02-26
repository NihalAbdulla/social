import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  model: User;
  loading = false;
  returnUrl: string = "/login";
  showUserIstaken :boolean = false;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private authenticationService : AuthenticationService) { }

    ngOnInit() {
      this.model = new User();
   }
 
   register() {
         this.loading = true;
         this.authenticationService.register(this.model)
             .subscribe(
                 data => {
                    let navigationExtras: NavigationExtras = {
                              queryParams: {
                              "fromRegister": "yes"
                         }
                      };
                     this.router.navigate([this.returnUrl],navigationExtras);
                 },
                 error => {
                     this.showUserIstaken=true;
                     console.log("Error");
                     this.loading = false;
                 });
        
        
     }

}
