import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plant-types-new',
  templateUrl: './plant-types-new.component.html',
  styleUrls: ['./plant-types-new.component.scss']
})
export class PlantTypesNewComponent implements OnInit {
  value:number;

  constructor() { }
  ngOnInit() {
  }
  pitch(event: any) {
    this.value = event.value;
  }
  
}
