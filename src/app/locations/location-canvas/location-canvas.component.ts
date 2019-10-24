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
import { ActivatedRoute } from "@angular/router";
import { Room } from "src/app/shared/models/room";
import { RoomsService } from "src/app/services/rooms/room.service";

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
  room: Room = new Room();

  constructor(
    private locationService: LocationsService,
    private plantService: PlantsService,
    private roomService: RoomsService,
    private activeRoute: ActivatedRoute
  ) {
    this.location.positions = this.generateEmptyLocations(20, 10);
  }

  get availablePlants() {
    if (!this.plantList || !this.plantList.length) {
      return [];
    }
    return this.plantList.filter(p => p.location);
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
    let room = roomsList.find(room => room.id === id);
    return room;
  }

  allowDrop(ev) {
    ev.preventDefault();
  }
  drag(ev, plantIndex: number) {
    this.currentPlant = plantIndex;
  }

  drop(ev, col, row) {
    this.location.positions[row][col] = this.plantList[this.currentPlant];
    this.plantList[this.currentPlant].location = false;
    this.plantService.update(
      this.plantList[this.currentPlant].Id,
      this.plantList[this.currentPlant]
    );
    this.save();
  }

  remove(ev, col, row) {
    let plant = this.location.positions[row][col];
    plant.location = true;
    this.plantService.update(plant.Id, plant);
    this.room.location.positions[row][col] = "null";
    this.roomService.update(this.room.id, this.room);
    
  }

  async save() {
    if (!this.location.id && !this.room.location) {
      let id = await this.locationService.create({
        positions: this.location.positions
      });
      this.room.location = this.location;
      this.room.location.id = id;
      this.roomService.update(this.roomId, this.room);
    } else {
      this.location = this.room.location;
      this.roomService.update(this.roomId, this.room);
    }
  }

  async getLocation() {
    let allLocations = await this.locationService.getAll();
    allLocations.forEach(item => item.id === this.room.location.id);
  }

  onSubmit() {
    this.room.location = this.location;
    this.roomService.update(this.roomId, this.room);
  }

  async ngOnInit() {
    await this.getPlants();
    this.roomId = this.activeRoute.snapshot.paramMap.get("id");
    this.room = await this.getRoomById(this.roomId);
    this.location.positions = this.room.location.positions;
  }
}
