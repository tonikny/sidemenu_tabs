import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit, OnDestroy {
  public folder = '';
  sub: Subscription;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.sub = this.route.queryParamMap
    .subscribe(queryParamMap => {
      this.folder = queryParamMap.has('id') ? queryParamMap.get('id') : 'Home';
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
