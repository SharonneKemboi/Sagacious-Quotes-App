import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote[]=[
    new Quote("","Sharonne Vanessa","Be human !",),
    new Quote("","Junaid sanah","Hardwork Pays",),
    new Quote("","Nancy Wells","Live.Laugh.Love.",)
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


  
