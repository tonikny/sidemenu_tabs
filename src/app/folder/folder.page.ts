import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit, OnDestroy {
  public folder = '';
  sub: Subscription;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    // this.commonService.getTitle().subscribe((title: string) => {
    //   console.log('title', title);
    //   this.folder = title;
    // });
  }

  ngOnDestroy(): void {
  }

}
