import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
})
export class TestsPage implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.setTitle('Tests');
    this.myDisplayer(this.myCalculator(5, 5));
  }

  myDisplayer(some) {
    console.log(some);
  }

  myCalculator(num1, num2) {
    return num1 + num2;
  }
}
