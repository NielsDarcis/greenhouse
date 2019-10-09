import { Component, OnChanges, Input } from "@angular/core";
import { faFire } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "fire-maker",
  templateUrl: "./fire-maker.component.html"
})
export class FireMakerComponent implements OnChanges {
  faFire = faFire;
  printFires: number[] = [0];
  @Input() fireValue: number;

  ngOnChanges() {
    this.printFires= Array(Math.round(this.fireValue/5)).fill(0).map((x,i)=>i);
  }
}
