import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers } from "@angular/http";
import { User } from "../entities/user";

@Injectable()
export class UserService {

  public logged: boolean = false;
  constructor(private http: Http) { }

  getUserProfile(id: string) {
    var params = JSON.stringify(id);
    let headers = new Headers({ 'Accept': 'application/json' });
    headers.append('x-auth-token',localStorage.getItem("id_token") );

    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:8080/auth/me',params,options)
        .map((response: Response) => {
             let res = <User> response.json().result;
             return res;
        });
  } 

  getLatestStories(page: number = 1) {
    console.log("Get lastest stories");
    var BASE_URL = 'https://node-hnapi.herokuapp.com';
    return this.http.get('https://node-hnapi.herokuapp.com/news?page='+page)
      .map((response: Response) => {
        console.log("response.json()");
       return response.json();
      });
}

}
