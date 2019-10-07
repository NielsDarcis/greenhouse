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
  itemList: any;
  database: string= 'plants';

  constructor(private db: AngularFireDatabase) { 
    this.itemList = this.db.list(this.database);
    this.item = this.db.object(this.database).valueChanges();
  }

  createId(){
    return this.db.createPushId() 
  }
  create(object: Plant) {
    object.Id = this.createId();
    this.itemList.push(object);
  }
  
  async get() {
    return await this.db.list<Plant>(this.database).valueChanges().pipe(take(1)).toPromise();
  }

}
