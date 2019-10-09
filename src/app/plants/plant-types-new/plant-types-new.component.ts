import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plant-types-new',
  templateUrl: './plant-types-new.component.html',
  styleUrls: ['./plant-types-new.component.scss']
})
export class PlantTypesNewComponent implements OnInit {
  moistValue:number;
  sunValue:number;
  constructor() { }
  ngOnInit() {
  }
  pitchMoist(event: any) {
    this.moistValue = event.value;
  }
  pitchSun(event:any){
    this.sunValue = event.value;
  }
  
}