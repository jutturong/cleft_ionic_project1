import {Component} from '@angular/core';
import {NavController,MenuController,ViewController } from 'ionic-angular';

import { PageContentPage1 }  from '../page-content/page-content'; //ภาวะปากแหว่งเพดานโหว่
import { PageContentPage2 }  from '../page-content/page-content2'; //ภาวะปากแหว่งเพดานโหว่
import { PageContentPage3 }  from '../page-content/page-content3'; //ภาวะปากแหว่งเพดานโหว่
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
        { title:'ภาวะปากแหว่งเพานโหว่',description:'',icon:'ios-arrow-forward-outline',num:0,component: PageContentPage1 , image: 'image/avatar-frodo.jpg', },
        { title:'สาเหตุ',description:'',icon:'ios-arrow-forward-outline',num:1 ,  component: PageContentPage2 , image: 'image/avatar-frodo.jpg' },
        { title:'โอกาสจะเกิดซ้ำ',description:'',icon:'ios-arrow-forward-outline',num:2 , component: PageContentPage3 , image: 'image/avatar-frodo.jpg',},
        { title:'ปัญหาที่พบและการแก้ไข',description:'',icon:'ios-arrow-forward-outline',num:3 , },
        { title:'การดูแลรักษา ผ่าตัด และฟื้นฟูสภาพ',description:'',icon:'ios-arrow-forward-outline',num:4},
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
