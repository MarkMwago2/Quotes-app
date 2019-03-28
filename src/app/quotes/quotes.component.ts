import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit{
  quotes = [
    new Quote('Usiniambie, mimi Mtanzania bana.','Mark', 'Leo',new Date(2019,2,24)),
    new Quote('Sit Down,Be humble','Lamar','Nelson',new Date(2019,2,24)),
    new Quote('Pambana na hali yako my friend','Mark', 'Ciku',new Date(2019,2,24)),
  ]

  completeQuote(isComplete,index){
        if (isComplete){
            this.quotes.splice(index,1);
            }
            }

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
 deleteQuote(isComplete,index){
   if(isComplete){
     let toDelete=confirm('Are you sure you want to delete?')

     if (toDelete){
       this.quotes.splice(index,1);
     }
   }
 }
  // upVote (){
  //   this.upVote = this.upVote;
  // }
  //
  // downvote = 0;
  // downVote (){
  //   this.downvote = this.downvote +1;
  // }




  constructor() { }
  ngOnInit() {
  }

}
