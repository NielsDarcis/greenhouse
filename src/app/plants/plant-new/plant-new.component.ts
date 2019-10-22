import { Component, OnInit } from '@angular/core';
import { PlantsService } from "../../services/plants/plants.service";
import { PlanttypesService } from "../../services/planttypes/planttypes.service"
import { Plant } from "../../shared/models/plant/plant";
import {PlantType } from "../../shared/models/plant-type";
import {Router} from '@angular/router';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-plant-new',
  templateUrl: './plant-new.component.html',
  styleUrls: ['./plant-new.component.scss']
})
export class PlantNewComponent implements OnInit {
  faSeedling=faSeedling;
  selectedValue: string;
  plantTypeList: PlantType [];
  plant: Plant = new Plant();


  constructor(private plantService: PlantsService, private router: Router, private _snackBar: MatSnackBar,private plantTypeService: PlanttypesService,) { }


  // voeg een nieuwe plant toe
  onSubmit() {
    this.plantService.create(this.plant);
    this.router.navigate(['home']);
    this.openSnackBar('Plant Creation', 'Succeed' )
    
  }

  // haal lijst met type planten op 

  async getPlantTypes() {
    this.plantTypeList = await this.plantTypeService.getAll();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.getPlantTypes();
  }

}
