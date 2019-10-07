import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})


export class PlantsService {
  item: Observable<any>;
  itemRef: any;
  constructor(private db: AngularFireDatabase) { 
    this.itemRef = db.list('plants');
    this.item = db.object('plants').valueChanges();
  }


  createPlant(plant: object) {
    this.itemRef.push(plant);
}


}
