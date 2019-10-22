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
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/shared/models/room';
import { RoomsService } from 'src/app/services/rooms/room.service';

@Component({
  selector: "app-location-canvas",
  templateUrl: "./location-canvas.component.html",
  styleUrls: ["./location-canvas.component.scss"]
})
export class LocationCanvasComponent implements OnInit {
  faMapMarkerAlt = faMapMarkerAlt;
  item: any;
  plantList: Plant[];
  currentPlant: number;
  location: Location = new Location();
  roomId: string;
  room: Room = new Room()
  

  constructor(
    private locationService: LocationsService,
    private plantService: PlantsService,
    private roomService: RoomsService,
    private activeRoute: ActivatedRoute,
  ) {
    this.location.positions = this.generateEmptyLocations(15, 20);
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

  async getRoomById(id: string) {
    let roomsList = await this.roomService.getAll();
    this.room = roomsList.find(room => room.id === id);
  }


  allowDrop(ev) {
    ev.preventDefault();
  }
  drag(ev, plantIndex: number) {
    this.currentPlant = plantIndex;
  }
 
  drop(ev, col, row) {
    this.location.positions[row][col] = this.plantList[this.currentPlant];
    this.plantList[this.currentPlant].location=false;
    this.plantService.update(this.plantList[this.currentPlant].Id, this.plantList[this.currentPlant])
    this.save()

  }

  remove(ev, col, row){
    let plant = this.location.positions[row][col];
    plant.location = true;
    this.plantService.update(plant.Id, plant);
    this.location.positions[row][col]="null";
    this.locationService.update(this.location.id, {positions: this.location.positions});
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
    this.roomId = this.activeRoute.snapshot.paramMap.get("id")
    this.getRoomById(this.roomId);
  }
}
