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
    this.plantList = this.db.list('plants');
    this.item = this.db.object('plants').valueChanges();
  }


  createPlant(plant: Plant) {
    this.plantList.push(plant);
  }
  getPlantList(): Observable<any[]>{
    let plantQuery = this.plantList;
    console.log(plantQuery)
    return plantQuery;
  }
  getShares(path) {
    return this.db.list(path).valueChanges();
  }

}
