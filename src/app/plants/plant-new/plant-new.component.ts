import { Component, OnInit } from '@angular/core';
import { PlantsService } from "../../services/plants/plants.service";
import { Plant } from "../../shared/models/plant/plant";
import {Router} from '@angular/router';

@Component({
  selector: 'app-plant-new',
  templateUrl: './plant-new.component.html',
  styleUrls: ['./plant-new.component.scss']
})
export class PlantNewComponent implements OnInit {

  constructor(private plantService: PlantsService, private router: Router) { }

  ngOnInit() {
  }

}
