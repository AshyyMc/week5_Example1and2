import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public result:number;

  constructor() {
  }

 setResult(theResult:number) {
   this.result=theResult;
 }
}
