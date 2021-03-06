import { Component, OnInit, Inject } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PlanttypesService } from "../../services/planttypes/planttypes.service";
import { PlantType } from "src/app/shared/models/plantType/plant-type";
import { faTree } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-plant-types-new",
  templateUrl: "./plant-types-new.component.html",
  styleUrls: ["./plant-types-new.component.scss"]
})
export class PlantTypesNewComponent implements OnInit {
  faTree = faTree;
  plantType: PlantType = new PlantType();
  constructor(
    private plantTypesService: PlanttypesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  onSubmit(): void {
    this.plantTypesService.create(this.plantType);
    this.router.navigate(["planttypes"]);
  }
  delete(plantType: PlantType): void {
    event.preventDefault();
    this.openDialog(plantType);
  }
  edit(plantType: PlantType): void {
    event.preventDefault();
    this.plantTypesService.update(plantType.id, plantType);
    this.router.navigate(["planttypes"]);
  }
  async ngOnInit() {
    let id = this.activeRoute.snapshot.paramMap.get("id");
    if (id !== null) {
      const plantType = await this.plantTypesService.getById(id);
      this.plantType = plantType;
    }
  }
  openDialog(plantType: PlantType): void {
    const dialogRef = this.dialog.open(PlantTypeNewDialog, {
      width: "250px",
      data: { plantType: plantType }
    });
  }
  showInfo(text: string, action: string) {
    this._snackBar.open(text, action, {
      duration: 2000
    });
  }
}

@Component({
  selector: "planttype-new-dialog",
  templateUrl: "plant-types-new-dialog.component.html"
})
export class PlantTypeNewDialog {
  constructor(
    public dialogRef: MatDialogRef<PlantTypeNewDialog>,
    private plantTypesService: PlanttypesService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: PlantType
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onYesClick(data: any): void {
    this.plantTypesService.delete(data.plantType.id);
    this.dialogRef.close();
    this.router.navigate(["planttypes"]);
  }
}
