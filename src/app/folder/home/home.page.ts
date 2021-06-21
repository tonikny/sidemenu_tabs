import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/interfaces';
import { CommonService } from 'src/app/shared/services/common.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private users: IUser[];

  constructor(private commonService: CommonService,
    private usersService: UsersService) { }

  ngOnInit() {
    this.commonService.setTitle('Home');

    this.usersService.getUsers().subscribe((users: IUser[]) => {
      this.users = users;
    }, (err) => {
      console.error('err', err);
    });
  }

}
