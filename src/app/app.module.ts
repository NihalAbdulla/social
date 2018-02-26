import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { AuthenticationService } from './services/authentication.service';
import { HttpModule, Http } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { DashboardComponent } from './dashboard/dashboard.component';

export function getAuthHttp(http: Http) {
  return new AuthHttp(new AuthConfig({
    headerName: 'x-auth-token',
    noTokenScheme: true,
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => localStorage.getItem('id_token')),
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
