import { Component, OnInit } from "@angular/core";
import { PlantsService } from "../../services/plants/plants.service";
import { PlanttypesService } from "../../services/planttypes/planttypes.service";
import { Plant } from "../../shared/models/plant/plant";
import { PlantType } from "../../shared/models/plantType/plant-type";
import { Router } from "@angular/router";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RoomsService } from "../../services/rooms/room.service";
import { Room } from "../../shared/models/room";
@Component({
  selector: "app-plant-new",
  templateUrl: "./plant-new.component.html",
  styleUrls: ["./plant-new.component.scss"]
})
export class PlantNewComponent implements OnInit {
  faSeedling = faSeedling;
  plantTypeList: PlantType[];
  plant: Plant = new Plant();
  roomsList: Room[];
  constructor(
    private plantsService: PlantsService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private plantTypeService: PlanttypesService,
    private roomsService: RoomsService
  ) {}

  selectType(event: any) {
    this.plant.type = event.value;
  }
  selectRoom(event: any) {
    this.plant.space = event.value;
  }
  onSubmit() {
    this.plantsService.create(this.plant);
    this.router.navigate(["home"]);
    this.openSnackBar("Plant Creation", "Succeed");
  }
  async getPlantTypes() {
    this.plantTypeList = await this.plantTypeService.getAll();
  }
  async getRooms() {
    this.roomsList = await this.roomsService.getAll();
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
  async ngOnInit() {
    await this.getPlantTypes();
    await this.getRooms();
  }
}
