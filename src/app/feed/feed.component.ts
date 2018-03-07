import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UserService } from "../services/user.service";
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {


  currentPage: number = 1;
  
  news: any;
 
  

  constructor(private userService: UserService) { 
    
  }

  ngOnInit() {
    this.news = [];
    
  }

  getStories(index) {
    this.currentPage = index;
    return this.userService.getLatestStories(this.currentPage)
          .subscribe(
            data => {
            console.log(data[0].title);
            this.news = data;
            
          });
  }

  onScrollDown () {
    console.log('scrolled down!!');
    this.getStories(this.currentPage+1);    
   
  }


}
