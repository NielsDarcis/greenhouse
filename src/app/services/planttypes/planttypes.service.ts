import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { PlantType } from 'src/app/shared/models/plant-type';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanttypesService {
  item: Observable<any>;
  itemList: any;
  database: string= 'plantTypes';

  constructor(private db: AngularFireDatabase) { 
    this.itemList = this.db.list(this.database);
    this.item = this.db.object(this.database).valueChanges();
  }
  
  createId(){
    return this.db.createPushId() 
  }
  async getAll() {
    return await this.db.list<PlantType>(this.database).valueChanges().pipe(take(1)).toPromise();
  }
  create(object: PlantType) {
    object.Id = this.createId();
    this.itemList.push(object);
  }
  // TODO write a update not with object
  update(key: string, newPlantType: PlantType) { 
    this.itemList.update(key,  newPlantType);
  }
  delete(key: string) {
    this.itemList.remove(key);
  }
  deleteAll(){
    this.itemList.remove();
  }
}
