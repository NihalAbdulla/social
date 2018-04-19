import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./guards/auth.guard";
import { ServiceDisplayComponent } from "./service-display/service-display.component";
import { BusinessProfileComponent } from "./business-profile/business-profile.component";

const routes: Routes = [
  {path: '', redirectTo:'businessProfile', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterationComponent},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'imageDisplay', component: ServiceDisplayComponent },
  {path: 'businessProfile', component: BusinessProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
