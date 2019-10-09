import { Component, OnChanges, Input } from '@angular/core';
import { faTint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'drop-maker',
  templateUrl: './drop-maker.component.html',
  styleUrls: ['./drop-maker.component.scss']
})
export class DropMakerComponent implements OnChanges {
  faTint = faTint;
  printdrops: number[] = [0];
  @Input() moistValue: number;

  ngOnChanges() {
    this.printdrops= Array(Math.round(this.moistValue/10)).fill(0).map((x,i)=>i);
  }

}
