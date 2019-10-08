import { Component, OnChanges, Input } from '@angular/core';
import { faTint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'drop-maker',
  templateUrl: './drop-maker.component.html',
})
export class DropMakerComponent implements OnChanges {
  faTint = faTint;
  printdrops: number[] = [0];
  @Input() amount: number;
  
  constructor() { }

  ngOnChanges() {
    this.printdrops= Array(Math.round(this.amount/10)).fill(0).map((x,i)=>i);
  }

}
