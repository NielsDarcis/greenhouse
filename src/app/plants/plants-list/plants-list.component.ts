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
  columnsToDisplay = ["name", "type", "location"];

  constructor(private plantService: PlantsService, private router: Router) {}

  async getPlants() {
    this.plantList = await this.plantService.getAll();
    this.dataSource = new MatTableDataSource(this.plantList);
  }

  ngOnInit() {
    this.getPlants();
  }

  onRowClicked(plants: Plant) {
    this.router.navigate(["plant-details", plants.Id]);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
