import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { PlantType } from 'src/app/shared/models/plant-type';

@Injectable({
  providedIn: 'root'
})
export class PlanttypesService {
  item: Observable<any>;
  itemList: any;
  database: string= 'plants';

  constructor(private db: AngularFireDatabase) { 
    this.itemList = this.db.list(this.database);
    this.item = this.db.object(this.database).valueChanges();
  }
  
  createId(){
    return this.db.createPushId() 
  }
  async getAll() {
    return await this.db.list<Plant>(this.database).valueChanges().pipe(take(1)).toPromise();
  }
  create(object: PlantType) {
    object.Id = this.createId();
    this.itemList.push(object);
  }
  update(key: string, newPlant: Plant) {
    this.itemList.update(key, { plant: newPlant });
  }
  delete(key: string) {
    this.itemList.remove(key);
  }
  deleteAll(){
    this.itemList.remove();
  }
}
