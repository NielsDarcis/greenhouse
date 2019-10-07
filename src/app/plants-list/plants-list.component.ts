import { Component, OnInit } from "@angular/core";
import { PlantsService } from "../services/plants/plants.service";
import { Plant } from "../shared/models/plant/plant";

@Component({
  selector: "app-plants-list",
  templateUrl: "./plants-list.component.html",
  styleUrls: ["./plants-list.component.scss"]
})
export class PlantsListComponent implements OnInit {
  plantList: Plant[];
  plant: Plant = new Plant();
  columnsToDisplay = [ 'name', 'type', 'location', ];
  constructor(private plantService: PlantsService) {}
 
  async getPlants() {
    this.plantList = await this.plantService.getAll();
  }
  ngOnInit() {
    this.getPlants();
  }
}
