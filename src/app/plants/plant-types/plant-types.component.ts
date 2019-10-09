import { Component, OnInit } from '@angular/core';
import { PlanttypesService } from "../../services/planttypes/planttypes.service";
import { PlantType } from '../../shared/models/plant-type';
@Component({
  selector: 'app-plant-types',
  templateUrl: './plant-types.component.html',
  styleUrls: ['./plant-types.component.scss']
})
export class PlantTypesComponent implements OnInit {
  plantTypeList: PlantType[] = [];
  constructor(private plantTypesService: PlanttypesService) {}
  async getPlants(){
    this.plantTypeList = await this.plantTypesService.getAll();
  }
  async ngOnInit() {
    await this.getPlants();
    await console.log(this.plantTypeList)
  }

}
