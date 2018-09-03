import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';
import { firebaseConfig } from './config/credentials';

const { SplashScreen, StatusBar }  = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    //private splashScreen: SplashScreen,
    //private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      firebase.initializeApp(firebaseConfig);
      SplashScreen.hide().catch(error => {
        console.error(error); });

      StatusBar.hide().catch(error => {
        console.error(error);
      });
      //this.statusBar.styleDefault();
      //this.splashScreen.hide();
    });
  }
}
