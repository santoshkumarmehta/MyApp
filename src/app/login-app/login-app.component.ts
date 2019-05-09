import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import {SocialAuthService,FacebookLoginProvider, GoogleLoginProvider} from 'ng-social';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent implements OnInit {
  loginForm:FormGroup;
  submitted=false;
  constructor(  private formBuilder: FormBuilder, private socialAuthService: SocialAuthService, private router:Router) { 
  
  }

  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]]
    });

  }
get f(){
  return this.loginForm.controls;
}
onSubmit(){
 // this.submitted= true;
 /* if(this.loginForm.invalid){
    return;
  }*/

 // alert('SUCESS!!:-)\n\n' + JSON.stringify(this.loginForm.value));

}
// for navigate
e1:string="admin@itzst.com"
p1:number=123456;
sendData( Email:string,Password:number):void{
  if(Email==this.e1 && Password==this.p1){
    
   this.router.navigate(['currencyconvert']);
    alert("Login Sucessful!!!!!");
  }
  
  else{
    this.submitted= true;
    this.loginForm.invalid
alert("wrong username and password!!!!!!")
  }
}
// for Social Login
public socialLogin(platform: string) {
  let socialPlatformProvider;

  if(platform == "facebook") {
    socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  } else if(platform == "google") {
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  }

  this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
    console.log(platform + " login in data : " , userData);
  });

}

}
