import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.page.html',
  styleUrls: ['./backdrop.page.scss'],
})
export class BackdropPage implements OnInit {
  enableBackdropDismiss = true;
  showBackdrop = true;
  shouldPropagate = true;
  constructor() { }

  ngOnInit() {
  }

  backDropTapped(event) {
    console.log(event);
  }

}
