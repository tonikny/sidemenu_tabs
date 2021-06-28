import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  // @ViewChild('test') test2: HTMLInputElement;

  info: string;
  infoChild: string;
  dataFromTab2: string;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    console.log('test2');
  }

  setInfo(test: HTMLInputElement): void {
    this.info = test.value;
  }

  setChildWord(event) {
    console.log(event);
    this.infoChild = event;
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    this.commonService.getCommonData().then((result) => {
      this.dataFromTab2 = result;
    });
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }
}
