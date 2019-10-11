import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {Router} from '@angular/router';
import { PlantsService } from "../../services/plants/plants.service";
import { Plant } from "../../shared/models/plant/plant";
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: "app-plant-detail",
  templateUrl: "./plant-detail.component.html",
  styleUrls: ["./plant-detail.component.scss"]
})
export class PlantDetailComponent implements OnInit {
  faLeaf= faLeaf;
  selectedFile: File = null;
  plantId: string;
  plantList: Plant[];
  plant: Plant = new Plant();

  constructor(
    private activeRoute: ActivatedRoute,
    private plantService: PlantsService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private storage: AngularFireStorage,
  ) {}

  onFileSelected(event){
    this.selectedFile= <File>event.target.files[0]
  }

 async  onUpload(){
   // upload image to firebase storage 
    const file = this.selectedFile;
    const filePath = this.selectedFile.name;
    const url = await this.storage.upload(filePath, file).then(async res => await res.ref.getDownloadURL());
    if(url.includes("jpg")){
      let first = url.split(".jpg",1);
      let second = url.split(".jpg", 2).splice(1);
      this.plant.imageUrl = first.toString() +"_400x400.jpg" + second.toString();
      this.plantService.update(this.plantId, this.plant);
      this.ngOnInit();
    }
    if(url.includes("png")){
      let first = url.split(".png",1);
      let second = url.split(".png", 2).splice(1);
      this.plant.imageUrl = first.toString() +"_400x400.png" + second.toString();
      this.plantService.update(this.plantId, this.plant);
      this.ngOnInit();
    }
    // refresh page to load in images
   
  }

  async getPlantById() {
    this.plantList = await this.plantService.getAll();
    this.plant = this.plantList.find(plant => plant.Id === this.plantId);
  }

  onSubmit() {
    this.plantService.update(this.plantId, this.plant);
    this.router.navigate(['home']);
    this.openSnackBar('Plant Saved', 'Succeed')
  }

  deletePlant(){
    console.log(this.plantId)
    this.plantService.delete(this.plantId);
    this.router.navigate(['home']);
    this.openSnackBar('Plant Deleted', 'Succeed')
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
    let id = this.activeRoute.snapshot.paramMap.get("id");
    this.plantId = id;
    this.getPlantById();
  }
}
