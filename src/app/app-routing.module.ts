import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAppComponent } from './login-app/login-app.component';
import { RegistrationAppComponent } from './registration-app/registration-app.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { ForgotpasswordAppComponent } from './forgotpassword-app/forgotpassword-app.component';
import { FooterAppComponent } from './footer-app/footer-app.component';
import { CurrencyAppComponent } from './currency-app/currency-app.component';

const routes: Routes = [
  {path:'header',component:HeaderAppComponent},
     {path:'login', component:LoginAppComponent},
  {path:'registration', component:RegistrationAppComponent},
  {path:'forgotpassword', component:ForgotpasswordAppComponent},
  {path:'footer', component:FooterAppComponent},
  {path:'currencyconvert', component:CurrencyAppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
