import { Component, OnInit } from "@angular/core";
import { PlantsService } from "../services/plants.service";

@Component({
  selector: "app-plants",
  templateUrl: "./plants.component.html",
  styleUrls: ["./plants.component.scss"]
})
export class PlantsComponent implements OnInit {
  name: string ="piet";
  type: string ="";
  location: string ="";

  plant: object[] = [
    { name: this.name, type: this.type, location: this.location }
  ];

  constructor(private plants: PlantsService) {}


  onSubmit(){
    this.plants.createPlant(plant);
      
  }

  ngOnInit() {
   
  }
}
