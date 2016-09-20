import {Component} from '@angular/core';
import {NavController,MenuController,ViewController } from 'ionic-angular';

import { PageContentPage1 }  from '../page-content/page-content'; //ภาวะปากแหว่งเพดานโหว่
import { PageContentPage2 }  from '../page-content/page-content2';
import { PageContentPage3 }  from '../page-content/page-content3';
import { PageContentPage4 }  from '../page-content/page-content4';
import { PageContentPage5 }  from '../page-content/page-content5';
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
        { title:'1.ภาวะปากแหว่งเพานโหว่',description:'',icon:'ios-arrow-forward-outline',num:0,component: PageContentPage1 , image: 'image/avatar-frodo.jpg', },
        { title:'2.สาเหตุ',description:'',icon:'ios-arrow-forward-outline',num:1 ,  component: PageContentPage2 , image: 'image/avatar-frodo.jpg' },
        { title:'3.โอกาสจะเกิดซ้ำ',description:'',icon:'ios-arrow-forward-outline',num:2 , component: PageContentPage3 , image: 'image/avatar-frodo.jpg',},
        { title:'4.ปัญหาที่พบร่วมกับภาวะปากแหว่งเพดานโหว่',description:'',icon:'ios-arrow-forward-outline',num:3 , component: PageContentPage4 , image: 'image/avatar-frodo.jpg', },
        { title:'5.แนวทางการดูแลรักษา',description:'',icon:'ios-arrow-forward-outline',num:4 , component: PageContentPage5 , image: 'image/avatar-frodo.jpg',},
        { title:'6.การป้องกัน',description:'',icon:'ios-arrow-forward-outline',num:4 , component: PageContentPage5 , image: 'image/avatar-frodo.jpg',},
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
