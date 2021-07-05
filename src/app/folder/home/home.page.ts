import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/interfaces';
import { CommonService } from 'src/app/shared/services/common.service';
import { UsersService } from 'src/app/shared/services/users.service';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  subscription: any;
  private users: IUser[] = [];

  constructor(private commonService: CommonService,
    private usersService: UsersService,
    private toastController: ToastController) { }

  async ngOnInit() {

    // const data = await this.commonService.getDataByPromiseExample();
    // console.log('promise result: ', data);

    const data = await this.callPromise();
    console.log('promise result: ', data);

    // this.commonService.getDataByPromiseExample().then((result) => {
    //   const data2 = result;
    //   console.log('promise result: ', data2);
    // }, (err) => {
    //   console.error('error', err);
    // });

    this.commonService.setTitle('Home');

    console.log('test 1', this.users);

    this.subscription = this.usersService.getUsers().subscribe((users: IUser[]) => {
      this.users = users;
      console.log('test 2', this.users);
      console.log('test 3', this.users);
    }, (err) => {
      console.error('err', err);
    });

    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        alert('Push registration ERROR');
        this.setToast('Push registration ERROR');
      }
    });

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: Token) => {
        alert('Push registration success, token: ' + token.value);
        this.setToast('Push registration success, token: ' + token.value);
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
        this.setToast('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        alert('Push received: ' + JSON.stringify(notification));
        this.setToast('Push received: ' + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
        this.setToast('Push action performed: ' + JSON.stringify(notification));
      }
    );


  }

  async setToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async callPromise() {
    return await this.commonService.getDataByPromiseExample();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
