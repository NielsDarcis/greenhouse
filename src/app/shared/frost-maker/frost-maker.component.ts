import { Component, OnChanges, Input } from '@angular/core';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'frost-maker',
  templateUrl: './frost-maker.component.html',
})
export class FrostMakerComponent implements OnChanges {
  faSnowflake = faSnowflake;
  faThermometerHalf = faThermometerHalf
  printFrosts: number[] = [0];
  printBitches: number[] = [0]
  @Input() frostValue: number;

  calculateFrostiesAndBitches(frostValue: number) {
    if(frostValue<0) {
      this.printFrosts= Array(Math.round(-this.frostValue/10)).fill(0).map((x,i)=>i);
      this.printBitches=[];
    }
    else if (frostValue>0){
      this.printFrosts=[];
      this.printBitches= Array(Math.round(this.frostValue/10)).fill(0).map((x,i)=>i);
    }
    else {
      this.printFrosts=[];
      this.printBitches=[];
    }
  }
  ngOnChanges() {
    this.calculateFrostiesAndBitches(this.frostValue);
  }

}
