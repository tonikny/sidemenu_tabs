import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  title = '';

  constructor() { }

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

}
