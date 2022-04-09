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




  constructor() { }

  ngOnInit(): void {
  }

}


  
