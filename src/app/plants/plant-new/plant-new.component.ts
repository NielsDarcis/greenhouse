import { Component, OnInit } from '@angular/core';
import { PlantsService } from "../../services/plants/plants.service";
import { Plant } from "../../shared/models/plant/plant";
import {Router} from '@angular/router';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-plant-new',
  templateUrl: './plant-new.component.html',
  styleUrls: ['./plant-new.component.scss']
})
export class PlantNewComponent implements OnInit {
  faSeedling=faSeedling;
  plant: Plant = new Plant();

  constructor(private plantService: PlantsService, private router: Router) { }

  onSubmit() {
    this.plantService.createPlant(this.plant);
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
