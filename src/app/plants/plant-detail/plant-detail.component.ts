import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { PlantsService } from "../../services/plants/plants.service";
import { PlanttypesService } from "../../services/planttypes/planttypes.service";
import { Plant } from "../../shared/models/plant/plant";
import { PlantType } from "../../shared/models/plantType/plant-type";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: "app-plant-detail",
  templateUrl: "./plant-detail.component.html",
  styleUrls: ["./plant-detail.component.scss"]
})
export class PlantDetailComponent implements OnInit {
  faLeaf = faLeaf;
  faImage = faImage;
  selectedFile: File = null;
  plantTypeSelect: string;
  plantId: string;
  plantList: Plant[];
  plantTypeList: PlantType[];
  plantType: PlantType;
  plant: Plant = new Plant();
  test: any;
  tempThreshold: Object;
  gaugeType = "semi";
  threshold =0.1;
  waterGauge = {
    value: 0,
    label: "Water",
    text: "Rel Hum",
    max: 0
  };
  lightGauge = {
    value: 0,
    label: "Light",
    text: "Lumen",
    max: 0
  };
  tempGauge = {
    value: 0,
    label: "Temp",
    text: "degr",
    max: 0,
    min: 0
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private plantService: PlantsService,
    private plantTypeService: PlanttypesService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private storage: AngularFireStorage,
    public dialog: MatDialog,
  ) {}

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  async onUpload() {
    // upload image to firebase storage
    const file = this.selectedFile;
    const filePath = this.selectedFile.name;
    const url = await this.storage
      .upload(filePath, file)
      .then(async res => await res.ref.getDownloadURL());
    if (url.includes("jpg")) {
      let first = url.split(".jpg", 1);
      let second = url.split(".jpg", 2).splice(1);
      this.plant.imageUrl =
        first.toString() + "_400x400.jpg" + second.toString();
      this.plantService.update(this.plantId, this.plant);
      this.ngOnInit();
    }
    if (url.includes("png")) {
      let first = url.split(".png", 1);
      let second = url.split(".png", 2).splice(1);
      this.plant.imageUrl =
        first.toString() + "_400x400.png" + second.toString();
      this.plantService.update(this.plantId, this.plant);
      this.ngOnInit();
    }
    // refresh page to load in images
  }

  selectType(event: any) {
    this.plant.type = event.value;
  }

  // update a plant
  onSubmit() {
    this.plantService.update(this.plantId, this.plant);
    this.router.navigate(["home"]);
    this.openSnackBar("Plant Saved", "Succeed");
  }

  // remove a plant
  deletePlant() {
    this.plantService.delete(this.plantId);
    this.router.navigate(["home"]);
    this.openSnackBar("Plant Deleted", "Succeed");
  }

  // snackbar for completed actions
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

  // haal lijst van type planten op
  async getPlantTypes() {
    let plantTypeList = await this.plantTypeService.getAll();
    return plantTypeList;
  }
  checkPlantThresholdsforAction(plant: Plant){
    plant.actions=[];
    if( plant.temp>plant.type.maxTemp*(1-this.threshold) ){
      plant.actions.push("hot")
    }
    if( plant.temp<plant.type.minTemp*this.threshold ){
      plant.actions.push("cold")
    }
    if( plant.water<plant.type.moist*this.threshold ){
      plant.actions.push("dry")
    }
    if( plant.light<plant.type.light*this.threshold){
      plant.actions.push("dark")
    }
    if(plant.actions.length !== 0){
      this.openDialog(plant)
    }
  }
  async ngOnInit() {
    this.getPlantTypes();
    this.plantId = this.activeRoute.snapshot.paramMap.get("id");
    this.plant = await this.plantService.getPlantById(this.plantId);

    let tempDiff = this.plant.type.maxTemp - Math.abs(this.plant.type.minTemp);
    this.tempThreshold = {
      [this.plant.type.minTemp]: { color: "red" },
      [this.plant.type.minTemp + tempDiff * 0.1]: { color: "orange" },
      [this.plant.type.minTemp + tempDiff * 0.2]: { color: "green" },
      [this.plant.type.minTemp + tempDiff * 0.8]: { color: "orange" },
      [this.plant.type.minTemp + tempDiff * 0.9]: { color: "red" }
    };
    this.checkPlantThresholdsforAction(this.plant)
    this.getFakeTemp();

  }

  getFakeTemp() {
    let result: number;
    const ob = new Observable(sub => {
      let timeout = null;

      // recursively send a random number to the subscriber
      // after a random delay
      (function push() {
        timeout = setTimeout(() => {
          sub.next(Math.round(Math.random() * 40));
          push();
        }, 10000); //set delay
      })();

      // clear any pending timeout on teardown
      return () => clearTimeout(timeout);
    });

    ob.subscribe((res: number) => {
      this.plant.temp = res;
    });
  }

  openDialog(plant:any): void {
    const dialogRef = this.dialog.open(PlantActionDialog, {
      width: "250px",
      data: { plant:plant }
    });
  }
}

@Component({
  selector: "plant-action-dialog",
  templateUrl: "plant-action-dialog.component.html"
})
export class PlantActionDialog {
  constructor(
    public dialogRef: MatDialogRef<PlantActionDialog>,
    private router: Router,
    private plantService: PlantsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  onCloseClick(): void {
    this.dialogRef.close();
  }
  onYesClick(data:Plant): void {
    data.light = data.type.light;
    data.water = data.type.moist;
    let tempDiff = (data.type.maxTemp - Math.abs(data.type.minTemp))/2
    data.temp = data.type.minTemp + tempDiff;
    console.log(data.temp)
    data.actions = []
    this.plantService.update(data.Id,data);
    this.dialogRef.close();
    this.router.navigate(["home"]);
  }
}
