import { Component, OnChanges, Input } from '@angular/core';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'time-maker',
  templateUrl: './time-maker.component.html',
})
export class TimeMakerComponent implements OnChanges {
  faHistory = faHistory;
  prints: number[] = [0];
  @Input() printValue: number;

  ngOnChanges() {
    this.prints= Array(this.printValue).fill(0).map((x,i)=>i);
  }

}

