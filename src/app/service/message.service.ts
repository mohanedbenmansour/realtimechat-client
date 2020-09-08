import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
  socket: any;

  constructor() {
    this.socket = io.connect('http://localhost:3000');
  }

  listen(eventname: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(eventname, (data) => {
        subscriber.next(data);
      });
    });
  }

  emit(eventname: string, data: any) {
    this.socket.emit(eventname, data);
  }
}
