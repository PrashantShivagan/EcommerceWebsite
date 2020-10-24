import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slide-banner',
  templateUrl: './image-slide-banner.component.html',
  styleUrls: ['./image-slide-banner.component.scss']
})
export class ImageSlideBannerComponent implements OnInit {
  mySlideImages = [
    'assets/images/winter_category_banner-min_1_.jpg',
    'assets/images/mobile_cover_category_banner-min.jpg',
    'assets/images/newBanner.jpg'
  ];
  myCarouselImages =[
    'assets/images/winter_category_banner-min_1_.jpg',
    'assets/images/mobile_cover_category_banner-min.jpg',
    'assets/images/newBanner.jpg'
  ];
  
  mySlideOptions={items: 1, dots: true, nav: true};
  myCarouselOptions={items: 3, dots: true, nav: true};
  constructor() { }

  ngOnInit() {
    
  }

}
