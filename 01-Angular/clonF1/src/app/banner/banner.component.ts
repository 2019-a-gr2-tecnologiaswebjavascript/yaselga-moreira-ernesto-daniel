import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

@Component({selector: 'ngbd-banner', templateUrl: './banner.component.html'})
export class BannerPrincipal {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
}

export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
