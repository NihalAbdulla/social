import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from "../../services/image.service";

@Component({
  selector: 'app-overview-tabs',
  templateUrl: './overview-tabs.component.html',
  styleUrls: ['./overview-tabs.component.scss']
})
export class OverviewTabsComponent implements OnChanges {
  images: any[];
  @Input() businessId: string;
  filterBy?: string = 'all'
  visibleImages: any[] = [];

  constructor(private imageService: ImageService) {
    if (this.businessId != null) {
      this.visibleImages = this.imageService.getImagesByBusinessId(this.businessId);
    }

  }

  ngOnChanges() {
    this.visibleImages = this.imageService.getImagesByCategory(this.businessId);
  }

}