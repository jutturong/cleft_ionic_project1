import {Component} from '@angular/core';
import {NavController,MenuController,ViewController } from 'ionic-angular';

import { PageContentPage1 }  from '../page-content/page-content';
//import { TabsPage } from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    //@ViewChild(Nav) nav: Nav;
     public items:any;
     public viewCtrl: ViewController;

  constructor(private navCtrl: NavController) {

    this.items=[
        { title:'ภาวะปากแหว่งเพานโหว่',description:'1',icon:'md-contacts',num:0,component: PageContentPage1  },
        { title:'สาเหตุ',description:'2',icon:'ios-git-compare-outline',num:1 , },
        { title:'โอกาสจะเกิดซ้ำ',description:'3',icon:'ios-git-network-outline',num:2 , },
        { title:'ปัญหาที่พบและการแก้ไข',description:'4',icon:'ios-image',num:3 , },
        { title:'การดูแลรักษา ผ่าตัด และฟื้นฟูสภาพ',description:'5',icon:'ios-medal-outline',num:4},
      ];


  }


  openPage(items) {
    // close the menu when clicking a link from the menu
  //  this.menu.close();
    // navigate to the new page if it is not the current page
    this.navCtrl.setRoot(items.component);
  }

/*
  goBack() {
     //this.navCtrl.pop();
      this.navCtrl.push(TabsPage);
   }
*/




}
