import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.scss']
})
export class BusinessProfileComponent implements OnInit {

  @Input() businessId: string;
  garbage:string;

  constructor(private router: ActivatedRoute,private routerNavigate: Router) { 
    this.garbage="sdfasda";

  }

  ngOnInit() {
  }

}
