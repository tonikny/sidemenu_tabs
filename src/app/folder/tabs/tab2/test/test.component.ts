import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  @Input() textoPadre: string;
  @Output() textoHijo: EventEmitter<any> = new EventEmitter();

  info: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {}

  setInfo(test: HTMLInputElement): void {
    // console.log(this.test2.value);
    console.log(test);
    this.info = test.value;
    this.textoHijo.emit(test.value);
    this.messageService.sendMessage(test.value);
  }

}
