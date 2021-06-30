import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  title = '';
  commonData = '';
  mystorage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.mystorage = storage;
  }

  setTitle(title: string): void {
    console.log('setting title', title);
    this.title = title;
  }

  getTitle(): any {
    console.log('getting title', this.title);
    return this.title;
    // const studentsObservable = new Observable(observer => {
    //     observer.next(this.title);
    // });
    // return studentsObservable;
  }

  setCommonData(txt: string) {
    this.mystorage.set('txt', txt);
    // this.commonData = txt;
  }

  async getCommonData() {
    // return this.commonData;
    const result = await this.mystorage.get('txt');
    return result;
  }

  async getDataByPromiseExample() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('ok');
      }, 3000);
    });
  }
}
