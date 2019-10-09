import { Component, OnInit } from '@angular/core';
import { PlanttypesService } from "../../services/planttypes/planttypes.service";
import {Router} from '@angular/router';
import { PlantType } from 'src/app/shared/models/plant-type';
import { faTree} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-plant-types-new',
  templateUrl: './plant-types-new.component.html',
  styleUrls: ['./plant-types-new.component.scss']
})
export class PlantTypesNewComponent implements OnInit {
  moistValue:number=0;
  sunValue:number=0;
  frostValue:number = 0;
  fireValue:number = 0;
  faTree = faTree;
  plantType: PlantType = new PlantType();
  constructor(
    private plantTypesService: PlanttypesService, 
    private router: Router) { }

  pitchMoist(event: any) {
    this.moistValue = event.value;
    this.plantType.moist = this.moistValue;
  }
  pitchSun(event:any){
    this.sunValue = event.value;
    this.plantType.light = this.sunValue;
  }
  pitchFrost(event:any){
    this.frostValue = event.value;
    this.plantType.frost = this.fireValue;
  }
  pitchFire(event:any){
    this.fireValue = event.value;
    this.plantType.maxTemp = this.fireValue;
  }
  onSubmit() {
    this.plantTypesService.create(this.plantType);
    this.router.navigate(['planttypes']);
  }
  ngOnInit() {
  }
}
