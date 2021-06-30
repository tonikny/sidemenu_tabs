import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/interfaces';
import { CommonService } from 'src/app/shared/services/common.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  subscription: any;
  private users: IUser[] = [];

  constructor(private commonService: CommonService,
    private usersService: UsersService) { }

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
