import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ChatService {

  constructor(private http: Http) { }


  public getMessages(params ,callback):any{
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:4000/getMessages',params,options)
        .map((response: Response) => {
            let res =  response.json().result;
            return res;
        });        
  }
}
