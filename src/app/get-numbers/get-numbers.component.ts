import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-get-numbers',
  templateUrl: './get-numbers.component.html',
  styleUrls: ['./get-numbers.component.css']
})
export class GetNumbersComponent implements OnInit {

  @Output() result: EventEmitter<number>;

  constructor() { 
    this.result = new EventEmitter();
  }

  ngOnInit() {
  }

addNumbers(x: HTMLInputElement, y: HTMLInputElement): boolean{
  let myresult = parseInt(x.value) + parseInt(y.value);
  this.result.emit(myresult);
  console.log(myresult);
  return false;
}

}
