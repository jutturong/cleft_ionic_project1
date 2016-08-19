import {Component} from '@angular/core';
import {NavController,MenuController } from 'ionic-angular';

import { PageContentPage1 }  from '../page-content/page-content';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
     public items:any;
  constructor(private navCtrl: NavController) {

    this.items=[
        { title:'ภาวะปากแหว่งเพานโหว่',description:'1',icon:'md-contacts',num:0,component: PageContentPage1  },
        { title:'สาเหตุ',description:'2',icon:'ios-git-compare-outline',num:1 , },
        { title:'โอกาสจะเกิดซ้ำ',description:'3',icon:'ios-git-network-outline',num:2 , },
        { title:'ปัญหาที่พบและการแก้ไข',description:'4',icon:'ios-image',num:3 , },
        { title:'การดูแลรักษา ผ่าตัด และฟื้นฟูสภาพ',description:'5',icon:'ios-medal-outline',num:4},
      ];


  }




}
