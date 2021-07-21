import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import { TestsService } from './services/tests.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.page.html',
  styleUrls: ['./tests.page.scss'],
})
export class TestsPage implements OnInit {

  text = 'Hola';
  imgurl = 'https://www.publicdomainpictures.net/pictures/250000/velka/eye-chart-test-vintage.jpg';
  link = 'https://www.publicdomainpictures.net/pictures/250000/velka/eye-chart-test-vintage.jpg';

  constructor(
    private commonService: CommonService,
    private testsService: TestsService,
    private socialSharing: SocialSharing
  ) {}

  ngOnInit() {
    this.commonService.setTitle('Tests');
    // this.testCors();
  }

  testCors() {
    this.testsService.getCatastroStuff().subscribe((result) => {
      console.log(result);
    });
  }

  shareGeneric(parameter){
    const url = this.link;
    const text = parameter+'\n';
    this.socialSharing.share(text, 'MEDIUM', null, url);
  }

}
