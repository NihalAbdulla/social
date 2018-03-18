import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from "../services/image.service";

@Component({
  selector: 'app-imagefeeds',
  templateUrl: './imagefeeds.component.html',
  styleUrls: ['./imagefeeds.component.css']
})
export class ImagefeedsComponent implements OnChanges  {

  images:any[];
  filterBy?: string = 'all'
  visibleImages:any[] = [];

  constructor(private imageService: ImageService) {
    console.log(this.filterBy)
    this.visibleImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
}

}
