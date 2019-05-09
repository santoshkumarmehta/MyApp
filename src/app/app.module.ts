import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAppComponent } from './login-app/login-app.component';
import { RegistrationAppComponent } from './registration-app/registration-app.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { ForgotpasswordAppComponent } from './forgotpassword-app/forgotpassword-app.component';
import { FooterAppComponent } from './footer-app/footer-app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSocialModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'ng-social';
import { CurrencyAppComponent } from './currency-app/currency-app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { from } from 'rxjs';
export function getAuthServiceConfigs() { 
  let config = new AuthServiceConfig( [ { id: FacebookLoginProvider.PROVIDER_ID, provider: new FacebookLoginProvider("1758555154405794") },
   { id: GoogleLoginProvider.PROVIDER_ID, provider: new GoogleLoginProvider("1074764438873-k221gusckcgqaalhqnsqn891kjoigcas.apps.googleusercontent.com") },
   ] );

    return config; 
  }


@NgModule({
  declarations: [
    AppComponent,
    LoginAppComponent,
    RegistrationAppComponent,
    HeaderAppComponent,
    HomeAppComponent,
    ForgotpasswordAppComponent,
    FooterAppComponent,
    CurrencyAppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSocialModule,
    NgbModule  
  ],
  providers: [ { provide: AuthServiceConfig, useFactory: getAuthServiceConfigs }    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
