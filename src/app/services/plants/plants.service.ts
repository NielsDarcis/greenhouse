import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Plant } from 'src/app/shared/models/plant/plant';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class PlantsService {
  item: Observable<any>;
  plantList: any;

  constructor(private db: AngularFireDatabase) { 
    this.plantList = this.db.list('plants');
    this.item = this.db.object('plants').valueChanges();
    this.db.createPushId 
  }


  createPlant(plant: Plant) {
    this.plantList. push(plant);
  }
  getPlantList(): Observable<any[]>{
    let plantQuery = this.plantList;
    console.log(plantQuery)
    return plantQuery;
  }
  async get() {
    return await this.db.list<Plant>('plants').valueChanges().pipe(take(1)).toPromise();
  }

}
