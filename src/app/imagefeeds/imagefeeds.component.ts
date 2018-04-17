import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from "../services/image.service";

@Component({
  selector: 'app-imagefeeds',
  templateUrl: './imagefeeds.component.html',
  styleUrls: ['./imagefeeds.component.css']
})
export class ImagefeedsComponent implements OnChanges  {

  images:any[];
  @Input() category:string;
  filterBy?: string = 'all'
  visibleImages:any[] = [];

  constructor(private imageService: ImageService) {
    if(this.category != null){
      this.category='makeup';
    }
    this.visibleImages = this.imageService.getImagesByCategory(this.category);
  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImagesByCategory(this.category);
}

}
