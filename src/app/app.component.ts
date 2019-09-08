import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SidemenuService } from './services/utilities/sidemenu.service';
import { VersionService } from './services/utilities/version.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  mainPages: any;
  utilityPages: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private sidemenuService: SidemenuService,
    private versionService: VersionService
  ) {
    this.initializeApp();
    this.loadSideMenu();
    this.versionService.showNewVersion();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  loadSideMenu() {
    this.sidemenuService.get().subscribe((response: any) => {
      this.mainPages = response.mainPages;
      this.utilityPages = response.utilityPages;
    });
  }
}
