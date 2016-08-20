import {Component  } from '@angular/core';
import {NavController,MenuController,ViewController,ModalController,NavParams , Platform } from 'ionic-angular';

import { PageContentPage1 }  from '../page-content/page-content';
//import { TabsPage } from '../tabs/tabs';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    //@ViewChild(Nav) nav: Nav;
     public items:any;
     public viewCtrl: ViewController;


  constructor(private navCtrl: NavController,private modalController : ModalController) {

    this.items=[
        { title:'ภาวะปากแหว่งเพานโหว่',description:'1',icon:'md-contacts',num:0,component: PageContentPage1  },
        { title:'สาเหตุ',description:'2',icon:'ios-git-compare-outline',num:1 , },
        { title:'โอกาสจะเกิดซ้ำ',description:'3',icon:'ios-git-network-outline',num:2 , },
        { title:'ปัญหาที่พบและการแก้ไข',description:'4',icon:'ios-image',num:3 , },
        { title:'การดูแลรักษา ผ่าตัด และฟื้นฟูสภาพ',description:'5',icon:'ios-medal-outline',num:4},
      ];


  }




  openPage(items) {
    this.navCtrl.setRoot(items.component);
    // let modal = this.modalController.create(items.component);
    // modal.present();
  }


  openModal(characterNum) {
  let modal = this.modalController.create(ModalsContentPage, characterNum);
  modal.present();
  }



}




@Component({
templateUrl: 'build/pages/page-content/page-content2.html'
})

class ModalsContentPage {
character;
constructor(
public platform: Platform,
public params: NavParams,
public viewCtrl: ViewController
) {
var characters = [
{
name: 'Gollum',
quote: 'Sneaky little hobbitses!',
image: 'img/avatar-gollum.jpg',
items: [
{ title: 'Race', note: 'Hobbit' },
{ title: 'Culture', note: 'River Folk' },
{ title: 'Alter Ego', note: 'Smeagol' }
]
},
{
name: 'Frodo',
quote: 'Go back, Sam! I\'m going to Mordor alone!',
image: 'img/avatar-frodo.jpg',
items: [
{ title: 'Race', note: 'Hobbit' },
{ title: 'Culture', note: 'Shire Folk' },
{ title: 'Weapon', note: 'Sting' }
]
},
{
name: 'Samwise Gamgee',
quote: 'What we need is a few good taters.',
image: 'img/avatar-samwise.jpg',
items: [
{ title: 'Race', note: 'Hobbit' },
{ title: 'Culture', note: 'Shire Folk' },
{ title: 'Nickname', note: 'Sam' }
]
}
];
this.character = characters[this.params.get('charNum')];
}







dismiss() {
this.viewCtrl.dismiss();
}
}
