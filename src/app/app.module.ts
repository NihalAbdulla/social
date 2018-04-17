import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCarouselModule } from 'ngx-carousel';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { AuthenticationService } from './services/authentication.service';
import { HttpModule, Http } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {ImageUploadComponent} from './image-upload/image-upload.component'

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';
import { AuthGuard } from "./guards/auth.guard";
import { UserService } from "./services/user.service";
import {ImageService} from "./services/image.service";
import { FeedComponent } from './feed/feed.component';
import { MenuComponent } from './menu/menu.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { ImagefeedsComponent } from './imagefeeds/imagefeeds.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServiceDisplayComponent } from './service-display/service-display.component';
import { DialogBookingComponent, DialogBookingDetails } from './dialog-booking/dialog-booking.component';


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
  entryComponents: [DialogBookingComponent, DialogBookingDetails],
  declarations: [
    AppComponent,
    FileSelectDirective,
    LoginComponent,
    RegisterationComponent,
    DashboardComponent,
    FeedComponent,
    MenuComponent,
    ImageUploadComponent,
    ImagefeedsComponent,
    CarouselComponent,
    ServiceDisplayComponent,
    DialogBookingComponent,
    DialogBookingDetails
  ],
  imports: [
    BrowserModule,
    NgxCarouselModule,
    InfiniteScrollModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,    
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    ImageService,
    UserService,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
