import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



// class Message {
//   constructor(public text: string, public sender: string) { }
// }

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  messages: any = [];
  message: string = '';
  response: string = '';
  res: string = '';

  constructor(private _ApiService: ApiService, private _HttpClient: HttpClient) { }

  chat: any = []
  isLoading: boolean = false;
  isLoad: boolean = false;

  chat2: any = { message: '', response: '' }

  chatForm: FormGroup = new FormGroup({
    message: new FormControl(null,),
  })

  sendMessage() {
    if (this.message !== '') {
      this.isLoading = true;
      this.messages.push(this.message)
      this._ApiService.getReply(this.message).subscribe({
        next: (response) => {
          this.isLoading = false;
          this.response = response.response;
          this.messages.push(this.response)
          console.log(this.messages);
        },
        error: () => {
          console.log('erroooooooooooor');
        }
      })
    }
  }


  sendVoice() {
    this.isLoad = true
    this._ApiService.getVoice('voice').subscribe({
      next: (response) => {
        this.isLoad = false;
        this.res = response.response;
        console.log(this.res);
        
      },
      error: () => {
        console.log('erroooor');
      }
    })

  }


  ngOnInit(): void {



  }



}


