import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-service-display',
  templateUrl: './service-display.component.html',
  styleUrls: ['./service-display.component.scss']
})
export class ServiceDisplayComponent implements OnInit {

  category:string;

  constructor(private router: ActivatedRoute) { 
    this.router.queryParams.subscribe(params => {      
        this.category = params["category"];
        console.log(this.category);
    });
  }

  ngOnInit() {
    
  }

}
