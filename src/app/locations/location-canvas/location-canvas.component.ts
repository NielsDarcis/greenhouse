import {
  Component,
  OnInit,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
  ViewChild
} from "@angular/core";
import { LocationsService } from "../../services/locations/locations.service";
import { PlantsService } from "../../services/plants/plants.service";
import { Plant } from "../../shared/models/plant/plant";
import { Location } from "../../shared/models/location/location";

@Component({
  selector: "app-location-canvas",
  templateUrl: "./location-canvas.component.html",
  styleUrls: ["./location-canvas.component.scss"]
})
export class LocationCanvasComponent implements OnInit {
  item: any;
  plantList: Plant[];
  currentPlant: number;
  location: Location = new Location();
  

  constructor(
    private locationService: LocationsService,
    private plantService: PlantsService
  ) {
    this.location.positions = this.generateEmptyLocations(10, 10);
  }
  generateEmptyLocations(cols: number, rows: number) {
    const ret = [];
    for (let ir = 0; ir < rows; ++ir) {
      ret.push(Array(cols).fill("null"));
    }
    return ret;
  }

  async getPlants() {
    this.plantList = await this.plantService.getAll();
  }


  allowDrop(ev) {
    ev.preventDefault();
  }
  drag(ev, plantIndex: number) {
    this.currentPlant = plantIndex;
  }
 
  drop(ev, col, row) {
    this.location.positions[row][col] = this.plantList[this.currentPlant];
    console.log(this.currentPlant)
    console.log(this.plantList)
    this.plantList.splice(this.currentPlant,1);


  }

  async save() {
    if(!this.location.id){
      this.locationService.create({ positions: this.location.positions });
    }
    else{
      this.locationService.update(this.location.id, { positions: this.location.positions });
    };
  
  }

  async getLocation(){
    const allLocations =  await this.locationService.getAll();
    if(allLocations[0]){
      this.location = allLocations[0];
  }
}

  ngOnInit() {
    this.getPlants();
    this.getLocation();
  }
}
