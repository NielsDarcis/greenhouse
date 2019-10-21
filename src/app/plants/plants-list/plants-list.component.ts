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
  columnsToDisplay = ["name", "type", "location","actions"];
  constructor(private plantService: PlantsService, private router: Router) {}

  async getPlants() {
    this.plantList = await this.plantService.getAll();
    this.plantList = this.checkAllPlantsThresholds(this.plantList);
    console.log(this.plantList)
    this.dataSource = new MatTableDataSource(this.plantList);
  }

  ngOnInit() {
    // this.plantService.deleteAll();
    this.getPlants();
  }

  onRowClicked(plants: Plant) {
    this.router.navigate(["plant-details", plants.Id]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  checkPlantThresholds(plant: Plant){
    plant.actions=[];
    if( plant.temp>plant.type.maxTemp ){
      plant.actions.push("plant too hot")
    }
    if( plant.temp<plant.type.minTemp ){
      plant.actions.push("plant too cold")
    }
    if( plant.water<plant.type.moist ){
      plant.actions.push("plant too dry")
    }
    if( plant.light<plant.type.light){
      plant.actions.push("plant too dark")
    }
    return plant
  }
  checkAllPlantsThresholds(plantsList: Plant[]){
    let newPlantList = [];
    for(let plant of plantsList){
      newPlantList.push(this.checkPlantThresholds(plant))
    }
    return newPlantList;
  }
}
