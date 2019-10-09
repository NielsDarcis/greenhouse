import { Component, OnChanges, Input } from '@angular/core';
import { faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sun-maker',
  templateUrl: './sun-maker.component.html',
  styleUrls: ['./sun-maker.component.scss']
})
export class SunMakerComponent implements OnChanges {
  faSun = faSun;
  printSuns: number[] = [0];
  @Input() sunValue: number;

  ngOnChanges() {
    this.printSuns= Array(Math.round(this.sunValue/10)).fill(0).map((x,i)=>i);
  }

}
