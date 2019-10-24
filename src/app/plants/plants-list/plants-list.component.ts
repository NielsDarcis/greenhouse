import { Component, OnInit, ViewChild } from "@angular/core";
import { PlantsService } from "../../services/plants/plants.service";
import { Plant } from "../../shared/models/plant/plant";
import { MatSort } from "@angular/material/sort";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-plants-list",
  templateUrl: "./plants-list.component.html",
  styleUrls: ["./plants-list.component.scss"]
})
export class PlantsListComponent implements OnInit {
  plantList: Plant[];
  dataSource: any;
  plant: Plant = new Plant();
  columnsToDisplay = ["name", "type", "location", "actions"];
  threshold = 0.1;
  constructor(private plantService: PlantsService, private router: Router) {}

  async ngOnInit() {
    // this.plantService.deleteAll();
    this.plantList = await this.plantService.getAll();
    this.plantList = this.checkAllPlantsThresholds(this.plantList);
    this.dataSource = new MatTableDataSource(this.plantList);
  }

  onRowClicked(plants: Plant) {
    this.router.navigate(["plant-details", plants.Id]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  checkPlantThresholds(plant: Plant) {
    plant.actions = [];
    let tempDiff = plant.type.maxTemp - Math.abs(plant.type.minTemp);
    if (plant.temp > (plant.type.maxTemp - tempDiff*(1 - this.threshold))) {
      console.log((plant.type.maxTemp - tempDiff*(1 - this.threshold)))
      plant.actions.push("hot");
    }
    if (plant.temp < ( plant.type.minTemp + tempDiff * this.threshold)) {
      plant.actions.push("cold");
    }
    if (plant.water < plant.type.moist * this.threshold) {
      plant.actions.push("dry");
    }
    if (plant.light < plant.type.light * this.threshold) {
      plant.actions.push("dark");
    }
    return plant;
  }
  checkAllPlantsThresholds(plantsList: Plant[]) {
    let newPlantList = [];
    for (let plant of plantsList) {
      newPlantList.push(this.checkPlantThresholds(plant));
    }
    return newPlantList;
  }
}
