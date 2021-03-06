import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { Room } from "src/app/shared/models/room";


import { take } from "rxjs/operators";




@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  item: Observable<any>;
  itemList: any;
  database: string = "rooms";
  complete: any;

  constructor(private db: AngularFireDatabase) 
  {
    this.itemList = this.db.list(this.database);
    this.item = this.db.object(this.database).valueChanges();
    }

    async getAll() {
      return await this.db
        .list<Room>(this.database)
        .valueChanges()
        .pipe(take(1))
        .toPromise();
    }

    //firebase RealtimeDatabase does not support yet querying on properties of an object
    //waiting for that change or our change to firestore we ll do front end filtering
    async getByName(name: string) {
      let roomsList: Room[] = await this.getAll();
      let room:Room = roomsList.find(room => room.name === name);
      return room;
    }
    create(object: Room){
      object.id = this.db.createPushId();
      let key = this.itemList.push(object).key;
      object.id = key;
      this.itemList.update(key, object);
    }
    update(key: string, newRoom: Room){
      this.itemList.update(key, newRoom);
    }
    delete(key: string) {
      this.itemList.remove(key);
    }
    deleteAll() {
      this.itemList.remove();
    }

}
