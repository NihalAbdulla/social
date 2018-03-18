import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import { User } from '../entities/user';

declare const FB: any;

@Injectable()
export class AuthenticationService {


  constructor(private http: Http, private authHttp: AuthHttp) { 
    FB.init({
      appId: '149200655685141',
      status: false, // the SDK will attempt to get info about the current user immediately after init
      cookie: false,  // enable cookies to allow the server to access
      // the session
      xfbml: false,  // With xfbml set to true, the SDK will parse your page's DOM to find and initialize any social plugins that have been added using XFBML
      version: 'v2.8' // use graph api version 2.5
    });
  }

  login( model:  User) {
    let body = JSON.stringify({ email: model.username, password: model.password });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        console.log(body);
        return this.http.post('http://localhost:8080/auth/locallogin',body,options)
            .map((response: Response) => {
              var token = response.headers.get('x-auth-token');
              if (token) {
                localStorage.setItem('id_token', token);
                }
              var data = <User> response.json();
              return data;
            });
    
}

  register( model:  User) {
    let body = JSON.stringify(model);
    console.log(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:8080/auth/signup',body,options)
        .map((response: Response) => {
            console.log(response.json().result);
              let res = <User> response.json().result;
              return res;
        });        
}

fbLogin() {
  return new Promise((resolve, reject) => {
    FB.login(result => {
      if (result.authResponse) {
        return this.authHttp.post(`http://localhost:8080/auth/facebook`, { access_token: result.authResponse.accessToken })
          .toPromise()
          .then(response => {
            var token = response.headers.get('x-auth-token');
            if (token) {
              localStorage.setItem('id_token', token);
            }
            resolve(<User>response.json());
          })
          .catch(() => reject());
      } else {
        reject();
      }
    }, { scope: 'public_profile,email' })
  });
}

logout() {
  localStorage.removeItem('id_token');
}

isLoggedIn() {
  return new Promise((resolve, reject) => {
    this.getCurrentUser().then(user => {resolve(true)
    }).catch(() => reject(false));
  });
}

getCurrentUser() {
  // get the jwt token from local store and get it
  let headers = new Headers({ 'Accept': 'application/json' });
  headers.append('x-auth-token',localStorage.getItem("id_token") );
  let options = new RequestOptions({ headers: headers });
 
  return new Promise((resolve, reject) => {
    return this.http.get(`http://localhost:8080/auth/me`,options).toPromise().then(response => {
      resolve(response.json());
    }).catch(() => reject());
  });
}

}
