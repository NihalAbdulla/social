import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class ImageService {

    constructor(private http: Http){
        
    }
  visibleImages = [];
  
      getImages(){
          return this.visibleImages = IMAGES.slice(0);
      }
  
      getImage(id: number){
          return IMAGES.slice(0).find(image => image.id == id)
      }

      getImagesByCategory(category: string){

        console.log("getImagesByCategory Image fetched");  
          switch(category){
            case "makeup":
                return IMAGES;
            case "makeup":
                return IMAGES;
            default:
                return IMAGES;
          }
      }
      getImagesByBusinessId(businessId: string){
          console.log("Business ID Image Fetched");      
        return IMAGES;
        
    }
  }
  
  const IMAGES =[
      {"id":1, "category": "boats", "caption": "View from the boat", "url":"assets/img/boat_02.jpeg"},
      {"id":2, "category": "boats", "caption": "Sailing the coast", "url":"assets/img/boat_02.jpeg"},
      {"id":3, "category": "boats", "caption": "The water was nice", "url":"assets/img/boat_02.jpeg"},
      {"id":4, "category": "boats", "caption": "Cool water cavern", "url":"assets/img/boat_02.jpeg"},
      {"id":5, "category": "boats", "caption": "Sunset at the docks", "url":"assets/img/boat_02.jpeg"},
      {"id":6, "category": "camping", "caption": "Camping Trip '17'", "url":"assets/img/boat_02.jpeg"},
      {"id":7, "category": "camping", "caption": "Kim and Jessie", "url":"assets/img/boat_02.jpeg"},
      {"id":8, "category": "camping", "caption": "View from the top", "url":"assets/img/boat_02.jpeg"},
      {"id":9, "category": "camping", "caption": "On the trail", "url":"assets/img/boat_02.jpeg"},
      {"id":10, "category": "camping", "caption": "Our camping spot", "url":"assets/img/boat_02.jpeg"},
      {"id":11, "category": "camping", "caption": "RV Life", "url":"assets/img/boat_02.jpeg"},
      {"id":12, "category": "camping", "caption": "Hiking trip 2017", "url":"assets/img/boat_01.jpeg"},
      {"id":13, "category": "library", "caption": "Big library", "url":"assets/img/boat_01.jpeg"},
      {"id":14, "category": "library", "caption": "Stacks", "url":"assets/img/boat_01.jpeg"},
      {"id":15, "category": "library", "caption": "Saturday afternoon", "url":"assets/img/boat_01.jpeg"},
      {"id":16, "category": "library", "caption": "Local library", "url":"assets/img/boat_01.jpeg"},
      {"id":17, "category": "library", "caption": "Nice library", "url":"assets/img/boat_01.jpeg"}
  ]