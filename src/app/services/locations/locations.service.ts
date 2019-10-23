import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { Location } from "src/app/shared/models/location/location";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  item: Observable<any>;
  locationList: any;
  database: string = "locations";
  complete: any;

  constructor(private db: AngularFireDatabase) { 
    this.locationList = this.db.list(this.database);
    this.item = this.db.object(this.database).valueChanges();
  }
  async getAll() {
    return await this.db
      .list<Location>(this.database)
      .valueChanges()
      .pipe(take(1))
      .toPromise();
  }
  create(object: Location){
    object.id = this.db.createPushId();
    let key = this.locationList.push(object).key;
    object.id = key;
    this.locationList.update(key, object);
    return key;
  }
  async getById(id: string) {
    return await this.db
      .object<Location>(this.database + "/" + id)
      .valueChanges()
      .pipe(take(1))
      .toPromise();
  }
  update(key: string, newLocation: Location){
    this.locationList.update(key, newLocation);
  }
  delete(key: string) {
    this.locationList.remove(key);
  }
  deleteAll() {
    this.locationList.remove();
  }





}
