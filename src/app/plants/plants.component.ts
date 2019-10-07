import { Component, OnInit } from "@angular/core";
import { PlantsService } from "../services/plants.service";
import { Plant } from "../shared/models/plant/plant"

@Component({
  selector: "app-plants",
  templateUrl: "./plants.component.html",
  styleUrls: ["./plants.component.scss"]
})
export class PlantsComponent implements OnInit {

 plant: Plant = new Plant();
  

  constructor(private plants: PlantsService) {}


  onSubmit(){
    console.log(this.plant.)
    this.plants.createPlant(this.plant);
      
  }

  ngOnInit() {
    
   
  }
}
