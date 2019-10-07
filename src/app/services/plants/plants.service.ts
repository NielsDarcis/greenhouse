import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Plant } from 'src/app/shared/models/plant/plant';

@Injectable({
  providedIn: 'root'
})


export class PlantsService {
  item: Observable<any>;
  plantList: any;
  constructor(private db: AngularFireDatabase) { 
    this.plantList = db.list('plants');
    this.item = db.object('plants').valueChanges();
  }


  createPlant(plant: Plant) {
    this.plantList.push(plant);
  }
  getPlantList(){
    return this.plantList.snapshotChanges();
    console.log('service');
  }


}
