import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UserService } from "../services/user.service";
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {


  currentPage: number = 1;
  
  news: Array<string>;
  //private _data = new BehaviorSubject([]);
 // data: Observable<any>;

 
  

  constructor(private userService: UserService) { 
    this.news = [];
  }

  ngOnInit() {
    
  }

  getStories(index) {
    this.currentPage = index;
    return this.userService.getLatestStories(this.currentPage)
          .subscribe(
            data => {
            this.news.push(data[0].title);
            console.log(this.news);
            console.log(data);
            return data;            
          });
  }

  onScrollDown () {
    console.log('scrolled down!!');
    //this.getStories(this.currentPage+1);    
    this.currentPage = this.currentPage + 1;  
    this.getStories(this.currentPage) ;
  }


}
