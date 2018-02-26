import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public username: string;

  constructor(private router: ActivatedRoute,private routerNavigate: Router) { 
    
         this.router.queryParams.subscribe(params => {           
                this.username = params["username"];          
            });

            console.log(this.username+"cleeclee");
      }

  ngOnInit() {
  }

}
