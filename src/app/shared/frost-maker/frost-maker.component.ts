import { Component, OnChanges, Input } from '@angular/core';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'frost-maker',
  templateUrl: './frost-maker.component.html',
})
export class FrostMakerComponent implements OnChanges {
  faSnowflake = faSnowflake;
  printFrosts: number[] = [0];
  @Input() frostValue: number;

  calculateFrosties(frostValue: number) {
    if(frostValue<0) {
      this.printFrosts= Array(Math.round(-this.frostValue/10)).fill(0).map((x,i)=>i);
    }
    else(this.printFrosts=[])
  }
  ngOnChanges() {
    this.calculateFrosties(this.frostValue);
    console.log(this.printFrosts)
  }

}
