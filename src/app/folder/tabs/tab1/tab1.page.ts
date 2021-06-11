import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  users: [];

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    console.log('test1');
  };

  setInfo(test) {
    console.log(test);
    this.commonService.setTitle(test.value);
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
