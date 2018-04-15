import { Component, OnInit, Input } from '@angular/core';
import { NgxCarousel } from "ngx-carousel";
import { ImageService } from "../services/image.service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() category: string; 
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
  public carouselOne: NgxCarousel;
  constructor(private imageService : ImageService) { }

  ngOnInit() {
    //this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    
    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
    }
    console.log(this.category);
    this.fetchJsonByCategory();
  }
    
  public carouselTileLoad(evt: any) {   
    const len = this.carouselTileItems.length
    console.log(this.carouselTileItems);
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push("assets/img/boat_01.jpeg");
      }
    }    
  }

  public fetchJsonByCategory(){
     this.carouselTileItems = this.imageService.getImagesByCategory(this.category);
    
  }

}
