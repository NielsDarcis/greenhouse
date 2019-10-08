import { Component, OnInit } from '@angular/core';
import { faTint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plant-types-new',
  templateUrl: './plant-types-new.component.html',
  styleUrls: ['./plant-types-new.component.scss']
})
export class PlantTypesNewComponent implements OnInit {
  
  // autoTicks = false;
  // disabled = false;
  // invert = false;
  // max = 100;
  // min = 0;
  // showTicks = false;
  // step = 1;
  // thumbLabel = false;
  // value = 0;
  // vertical = false;

  faTint = faTint;
  constructor() { }

  ngOnInit() {
  }

}
