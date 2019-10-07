import { Component, OnInit } from "@angular/core";
import { PlantsService } from "../services/plants/plants.service";
import { Plant } from '../shared/models/plant/plant';

@Component({
  selector: "app-plants",
  templateUrl: "./plants.component.html",
  styleUrls: ["./plants.component.scss"]
})
export class PlantsComponent implements OnInit {
  name: string ="piet";
  type: string ="";
  location: string ="";
  plantList: Plant[];
 plant: Plant = new Plant();
  constructor(private plantService: PlantsService) {}
  onSubmit(){
    this.plantService.create(this.plant);
    console.log(this.plant) ;    
  }
  async getPlants(){
    this.plantList = await this.plantService.getAll()
  }
  ngOnInit() {
    this.getPlants();
  }
}
