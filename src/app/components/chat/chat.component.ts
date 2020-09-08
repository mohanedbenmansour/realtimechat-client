import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { UserService } from '../../service/user.service';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { Message } from '../../shared/message';
import { MessageService } from '../../service/message.service';
import { Observable } from 'rxjs';
import { Receiver } from '../../shared/receiver';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  friends: any;
  faLocationArrow = faLocationArrow;
  faPaperclip = faPaperclip;
  receiver: Receiver = {
    name: '',
    id: '',
  };
  sender: string;
  data: Message;
  receivedData: any;
  /*test*/
  title = 'Websocket Angular client ';
  userName: string;
  message: string;
  output: any[] = [];
  feedback: string;
  listOfFriends: any[] = [];
  constructor(
    public userService: UserService,
    public messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.sender = this.userService.getId();
    this.getMsg();

    this.messageService
      .listen('typing')
      .subscribe((data) => this.updateFeedback(data));
    this.messageService
      .listen('chat')
      .subscribe((data) => this.updateMessage(data));
  }

  assignId(id: string, name: string) {
    this.receiver = { id, name };
    console.log(this.receiver);
  }

  pushMsg(data: any) {
    console.log(data);
  }

  messageTyping(): void {
    this.messageService.emit('typing', this.sender);
  }

  sendMessage(): void {
    this.data = {
      sender: this.sender,
      receiver: this.receiver.id,
      message: this.message,
    };
    console.log(this.receiver.id, '+++', this.sender);
    this.messageService.emit('chat', this.data);
  }

  updateMessage(data: any) {
    this.feedback = '';
    if (!!!data) return;
    console.log(`${data.sender}:${data.receiver}:${data.message}`);
    this.output.push(data);
  }

  updateFeedback(data: any) {
    this.feedback = `${data} is typing a message`;
  }
  getUser(id: string): Observable<any> {
    let test: any;
    this.userService.getUserProfile(id).subscribe(
      (data) => {
        test = data;
        return test;
      },
      (err) => {
        return 1;
      }
    );
    return;
  }
  getMsg() {
    this.userService.getFriends(this.sender).subscribe(
      (data) => {
        this.friends = data[0]['friends'];

        this.friends.forEach((item) => {
          this.userService.getUserProfile(item).subscribe(
            (data) => {
              this.receiver.name = data['name'];
              this.receiver.id = data['_id'];
              this.listOfFriends.push(data);
            },
            (err) => {
              return 1;
            }
          );
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
