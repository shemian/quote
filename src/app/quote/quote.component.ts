import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"],
  animations: [""]
})
export class QuoteComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  quotes: Quote[] = [
    new Quote(
      1,
      "Posted by Abdi mustafah",
      "There is no true Liberation, without the liberation of a woman",
      "submited by K.daniel",
      new Date(2002, 4, 1)
    ),
    new Quote(
      2,
      "Posted by Steve Jobs",
      "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
      "submited by mahamed stifah",
      new Date(2003, 4, 1)
    ),
    new Quote(
      3,
      "Posted by JWinston Churchill",
      "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
      "submited by john mark",
      new Date(2010, 4, 1)
    ),
    new Quote(
      4,
      "Posted By Evans",
      "Pupper likes expensive snacks",
      "submited by K.J.Evans",
      new Date(2020, 4, 1)
    ),
    new Quote(
      5,
      "Posted By john rebman",
      "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
      "submited by K.D",
      new Date(2020, 4, 1)
    ),
    new Quote(
      6,
      "Posted by Will Rogers",
      "Don’t Let Yesterday Take Up Too Much Of Today.",
      "submited by Mash Hopes",
      new Date(2020, 4, 1)
    )
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  constructor() {}

  ngOnInit() {
    this.myStyle = {
      position: "fixed",
      width: "100%",
      height: "100%",
      "z-index": -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    this.myParams = {
      particles: {
        number: {
          value: 500
        },
        color: {
          value: "#ff0000"
        },
        shape: {
          type: "circle",
          polygon: {
            nb_sides: 5
          }
        }
      }
    };
  }
}
