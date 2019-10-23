import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { Plant } from "src/app/shared/models/plant/plant";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PlantsService {
  item: Observable<any>;
  itemList: any;
  database: string = "plants";
  complete: any;

  constructor(private db: AngularFireDatabase) {
    this.itemList = this.db.list(this.database);
    this.item = this.db.object(this.database).valueChanges();
  }

  async getAll() {
    return await this.db
      .list<Plant>(this.database)
      .valueChanges()
      .pipe(take(1))
      .toPromise();
  }
  
  async getPlantById(id: string) {
    let plantList = await this.getAll();
    let plant = plantList.find(plant => plant.Id === id);
    return plant
  }
  create(object: Plant){
    object.Id = this.db.createPushId();
    let key = this.itemList.push(object).key;
    object.Id = key;
    this.itemList.update(key, object);
  }
    update(key: string, newPlant: Plant){
      this.itemList.update(key, newPlant);
    }

  delete(key: string) {
    this.itemList.remove(key);
  }
  deleteAll() {
    this.itemList.remove();
  }
}
