import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

import {NavController, NavParams  } from 'ionic-angular';
import { ModalController , ViewController } from 'ionic-angular';
import { AlertController , LoadingController }  from 'ionic-angular';

@Component({
      template: '<ion-nav [root]="rootPage"></ion-nav>'
  //  templateUrl: 'build/pages/tab/tabs'
})
export class MyApp {
  // public items:any;
  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

/*
    this.items=[
        { title:'ภาวะปากแหว่งเพานโหว่',description:'',icon:'md-contacts',num:0,page:'http://www.google.com'},
        { title:'สาเหตุ',description:'',icon:'ios-git-compare-outline',num:1 , },
        { title:'โอกาสจะเกิดซ้ำ',description:'',icon:'ios-git-network-outline',num:2 , },
        { title:'ปัญหาที่พบและการแก้ไข',description:'',icon:'ios-image',num:3 , },
        { title:'การดูแลรักษา ผ่าตัด และฟื้นฟูสภาพ',description:'',icon:'ios-medal-outline',num:4},
      ];
      */

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
