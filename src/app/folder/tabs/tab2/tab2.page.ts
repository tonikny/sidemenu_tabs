import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    console.log('test2');

  }

  
ionViewWillEnter() {
  console.log('ionViewWillEnter');  
}

ionViewDidEnter() {
  console.log('ionViewDidEnter');  
}

ionViewWillLeave() {
  console.log('ionViewWillLeave');  
}

ionViewDidLeave() {
  console.log('ionViewDidLeave');  
}

}
