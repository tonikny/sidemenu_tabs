import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from './shared/services/message.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  menutitle = 'Inbox';
  subscription: any;

  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'mail' },
    { title: 'Tests', url: '/folder/tests', icon: 'footsteps' },
    { title: 'Tabs', url: '/folder/tabs', icon: 'swap-horizontal' },
    { title: 'Database', url: '/folder/database/list', icon: 'server' }
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.subscription = this.messageService.onMessage().subscribe((message) => {
      console.log('message received!', message);
      this.menutitle = message.text;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
