import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-app',
  templateUrl: './currency-app.component.html',
  styleUrls: ['./currency-app.component.css']
})

export class CurrencyAppComponent implements OnInit {
//base currency is Dollar
  currencyType=[
    { id:1,cname:'Europian (EUR)'},
    {id:2,cname:'Indian Rupees (INR)'},  
    {id:3,cname:'American Samoa (USD)'},
    {id:4,cname:'Japanies (JPY)'}, 
    {id:5,cname:'Australiyan (AUD)'}
    ];

  constructor( ) { }
   ngOnInit() {
    }
  
  id1Val:number=1.1475; id2Val:number=0.01428; id3Val:number=1;id4val:number=0.009272;
   id5val:number=0.71928;
   enteredNumber:number;
   abc:number;
  abc1:number; ctoc:number; result:number;
  toAmmount:number;
  currencyConverter() {
      this.enteredNumber=(this.abc);

switch(this.abc1){
  case 1:
   switch(this.ctoc){
     case 1:
     this.result=(this.enteredNumber);
     break;
     case 2:
     this.result=(this.enteredNumber*this.id1Val)*70;
     break;
     case 3:
     this.result=(this.enteredNumber*this.id1Val);
     break;
     case 4:
     this.result=(this.enteredNumber*this.id1Val)*108.437;
     break;
     case 5:
     this.result=(this.enteredNumber*this.id1Val)*1.390;
   }
   break;
  case 2:
  switch(this.ctoc){
    case 1:
    this.result=(this.enteredNumber* this.id2Val)/1.1475;
    break;
    case 2:
    this.result=(this.enteredNumber);
     break;
    case 3:
    this.result=(this.enteredNumber*this.id2Val);
    break;
    case 4:
    this.result=(this.enteredNumber*this.id2Val)/0.009292;
    break;
    case 5:
    this.result=(this.enteredNumber*this.id2Val)/0.719218;
  }
  break;
  case 3:
  switch(this.ctoc){
    case 1: 
    this.result=(this.enteredNumber*this.id3Val)/1.1475;
    break;
    case 2:
    this.result=(this.enteredNumber*this.id3Val)*70;
    break;
    case 3:
    this.result=(this.enteredNumber);
    break;
    case 4 :
    this.result=(this.enteredNumber*this.id3Val)/0.009292;
    break;
    case 5:
    this.result=(this.enteredNumber*this.id3Val)/0.719218;
  }
  break;
  case 4:
  switch(this.ctoc){
    case 1:
    this.result= (this.enteredNumber*this.id4val)/1.1475;
     break;
    case 2:
     this.result=(this.enteredNumber*this.id4val)/0.01428;
     break;
    case 3:
    this.result=(this.enteredNumber*this.id4val);
    break;
    case 4:
    this.result=this.enteredNumber;
    break;
    case 5:
    this.result=(this.enteredNumber*this.id4val)/0.719218;
  }
  break;
  case 5:
  switch(this.ctoc){
    case 1:
    this.result=(this.enteredNumber*this.id5val)/1.1475;
    break;
    case 2:
    this.result= (this.enteredNumber*this.id5val)/0.01428;
    break;
    case 3:
    this.result=(this.enteredNumber*this.id5val);
    break;
    case 4:
    this.result=(this.enteredNumber*this.id5val)/0.009292;
    break;
    case 5:
    this.result=(this.enteredNumber);
  }
}

// to propogation
      // alert(this.enteredNumber);

      // this.toAmmount=(this.enteredNumber/this.abc1)*this.ctoc;

      // this.result= this.toAmmount;
    
      // alert(this.enteredNumber);
      // alert(this.ctoc);
      // alert(this.abc);
       // alert(this.currencyType.length);
      //  alert(this.abc1);
      //     alert(this.id1Val);

  // if(this.ctoc>this.abc1 || this.ctoc<this.abc1)
  //   {
  //    if(this.ctoc>this.abc1){
  //    this.temp2=this.enteredNumber*this.ctoc;
  //   this.result= (this.temp2);
  //    }
  //    else if(this.ctoc<this.abc1){
  //      this.temp2=this.enteredNumber;
  //      this.result=this.temp2/this.abc1;
  //    }
     
  //  }
  //  else{
  
  //   }    


}
   
};



      

