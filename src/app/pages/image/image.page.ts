import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss']
})
export class ImagePage implements OnInit {
  items: any[] = [];
  constructor() {}

  ngOnInit() {
    this.items.push(
      {
        text: 'I am Image.',
        src:
          'https://ionicframework.com/docs/assets/icons/feature-component-icons-icon.png'
      },
      {
        text: 'I am Image too.',
        src:
          'https://ionicframework.com/docs/assets/icons/feature-component-navigation-icon.png'
      }
    );
  }
}
