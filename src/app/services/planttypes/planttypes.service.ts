import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireDatabase } from "@angular/fire/database";
import { PlantType } from "src/app/shared/models/plantType/plant-type";
import { take } from "rxjs/operators";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root"
})
export class PlanttypesService {
  item: Observable<any>;
  itemList: any;
  database: string = "plantTypes";

  constructor(private db: AngularFireDatabase) {
    this.itemList = this.db.list(this.database);
    this.item = this.db.object(this.database).valueChanges();
  }

  createId() {
    return this.db.createPushId();
  }
  async getAll() {
    return await this.db
      .list<PlantType>(this.database)
      .valueChanges()
      .pipe(take(1))
      .toPromise();
  }
  async getById(id: string) {
    return await this.db
      .object<PlantType>(this.database + "/" + id)
      .valueChanges()
      .pipe(take(1))
      .toPromise();
  }
  //TODO do backendfileter, Frontend filtering is very SUB optimal
  async getByName(name: string) {
    let itemsList: PlantType[] = await this.getAll();
    let item: PlantType = itemsList.find(item => item.name === name);
    return item;
  }
  async getSorted() {
    return firebase
      .database()
      .ref("plantTypes")
      .orderByChild("name");
  }
  create(object: PlantType) {
    object.id = this.db.createPushId();
    let key = this.itemList.push(object).key;
    object.id = key;
    this.itemList.update(key, object);
  }
  update(key: string, newPlantType: PlantType) {
    this.itemList.update(key, newPlantType);
  }
  delete(key: string) {
    this.itemList.remove(key);
  }
  deleteAll() {
    this.itemList.remove();
  }
}
