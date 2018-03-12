import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

/*npm install @types/socket.io-client --save
*/
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

	/* 
	* specifying Base URL.
	*/
	private BASE_URL = 'http://localhost:4000';  
  	private socket;

  	constructor() {}

  	/* 
	* Method to connect the users to socket
	*/
  	connectSocket(userId:string){
  		this.socket = io(this.BASE_URL,{ query: `userId=${userId}`});
  	}
 
 	/* 
	* Method to emit the add-messages event.
	*/
	sendMessage(message:any):void{
		this.socket.emit('add-message', message);
	}

	/* 
	* Method to receive add-message-response event.
	*/
	receiveMessages():any{ 
		let observable = new Observable(observer => {
			this.socket.on('add-message-response', (data) => {
				observer.next(data);    
			});

			return () => {
				this.socket.disconnect();
			};  
		});     
		return observable;
	}

}
