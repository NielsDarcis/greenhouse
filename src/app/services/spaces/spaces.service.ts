import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { Space } from "src/app/shared/models/space/space";

import { take } from "rxjs/operators";




@Injectable({
  providedIn: 'root'
})
export class SpacesService {
  item: Observable<any>;
  itemList: any;
  database: string = "spaces";
  complete: any;

  constructor(private db: AngularFireDatabase) 
  {
    this.itemList = this.db.list(this.database);
    this.item = this.db.object(this.database).valueChanges();
    }

    async getAll() {
      return await this.db
        .list<Space>(this.database)
        .valueChanges()
        .pipe(take(1))
        .toPromise();
    }

    create(object: Space){
      object.Id = this.db.createPushId();
      let key = this.itemList.push(object).key;
      object.Id = key;
      this.itemList.update(key, object);
    }
    update(key: string, newSpace: Space){
      this.itemList.update(key, newSpace);
    }
    delete(key: string) {
      this.itemList.remove(key);
    }
    deleteAll() {
      this.itemList.remove();
    }

}
