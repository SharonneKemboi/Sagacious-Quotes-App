import { formatCurrency } from '@angular/common';
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
// import * as EventEmitter from 'events';
import { Quote } from '../quote';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
  newQuote = new Quote("","","",);
  
  @Output() addQuote = new EventEmitter<Quote>();
 
  submitQuote(f:NgForm){
    if(f.valid){
      this.addQuote.emit(this.newQuote);
      this.newQuote = new Quote("","","",);
    }else{
      alert("Please enter valid inputs")
    }

  }

  constructor() { }

  ngOnInit(): void {
  }
}
