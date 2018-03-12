import { Component, OnInit } from '@angular/core';
import { ChatService } from "../services/chat.service";
import { SocketService } from "../services/socket.service";
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {

  private overlayDisplay = false;
	private selectedUserId = null;
	private selectedSocketId = null;
	private selectedUserName = null;	
  private username = null;
	private userId = null;
	private toUserId = null;
	private socketId = null;
	private chatListUsers = [];
	private message = '';
	private messages = [];

  constructor(
    private chatService : ChatService,
		private socketService : SocketService,
		private route :ActivatedRoute,
		private router :Router
  ) { }

  ngOnInit() {
		this.userId = this.route.snapshot.params['userId'];
		this.toUserId = this.route.snapshot.params['toUserId'];
    if(this.userId === '' || typeof this.userId == 'undefined') {
			this.router.navigate(['/']);
		}else{
			this.socketService.connectSocket(this.userId);
			this.selectedUser();
    }
  }

  selectedUser():void{
		this.selectedUserId = "user._id";
		this.selectedSocketId = "user.socketId";
		this.selectedUserName = "user.username";

		/* 
		* calling method to get the messages
		*/
		this.chatService.getMessages({ userId : this.userId,toUserId :this.selectedUserId} , ( error , response)=>{
			if(!response.error) {
				this.messages = response.messages;
			}
		});
	}

	isUserSelected(userId:string):boolean{
		if(!this.selectedUserId) {
			return false;
		}
		return this.selectedUserId ===  userId ? true : false;
	}

	sendMessage(event){
		if(event.keyCode === 13) {
			if(this.message === '' || this.message === null) {
				alert(`Message can't be empty.`);
			}else{

				if (this.message === '') {
					alert(`Message can't be empty.`);
				}else if(this.userId === ''){
					this.router.navigate(['/']);					
				}else if(this.selectedUserId === ''){
					alert(`Select a user to chat.`);
				}else{

					const data = {
						fromUserId : this.userId,
						message : (this.message).trim(),
						toUserId : this.selectedUserId,
						toSocketId : this.selectedSocketId,
						fromSocketId : this.socketId
					}
					this.messages.push(data);
					setTimeout( () =>{
	    					document.querySelector(`.message-thread`).scrollTop = document.querySelector(`.message-thread`).scrollHeight;
	    			},100);
					
					/* 
					* calling method to send the messages
					*/
					this.message = null;
					this.socketService.sendMessage(data);
				}
			}
		}
	}

	alignMessage(userId){
		return this.userId ===  userId ? false : true;
	}

}
