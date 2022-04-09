import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[]=[
    new Quote("joy","Sharonne Vanessa","Be human !",100,3,new Date(2022,1,4)),
    new Quote("shana","Junaid sanah","Hardwork Pays",50,2,new Date(2022,2,5)),
    new Quote("Kim","Nancy Wells","Live.Laugh.Love.",30,3,new Date(2022,3,4)),
    new Quote("Rail","Nancy Wells","Believe and It will happen.",2,0,new Date(2022,3,1)),
    new Quote("Manny","Jeniffer Cook","Nothing is for Free.",1,0,new Date(2022,3,8))

  ];

  get myQuotes(){
    return this.quotes.sort((a,b) => {
       return b.likes - a.likes;
     })
   }
 
   addNewQuote(quote:any){
     let quoteLength = this.quotes.length;
     quote.id = quoteLength+1;
   
     this.quotes.push(quote);
   }
 
   deleteQuote(isComplete:any,index:any){
     if(isComplete){
       let toDelete = confirm(`Delete this quote by ${this.quotes[index].author}?`)
       if(toDelete){
         this.quotes.splice(index,1); /*use splice here)*/
       }
     }
 
   }
   

  constructor() { }

  ngOnInit(): void {
  }

}


  
