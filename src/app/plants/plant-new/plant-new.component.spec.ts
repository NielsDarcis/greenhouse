import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantNewComponent } from './plant-new.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { Component, OnInit } from "@angular/core";
import { PlantsService } from "../../services/plants/plants.service";
import { PlanttypesService } from "../../services/planttypes/planttypes.service";
import { Plant } from "../../shared/models/plant/plant";
import { PlantType } from "../../shared/models/plantType/plant-type";
import { Router, RouterModule } from "@angular/router";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { MatSnackBar } from "@angular/material/snack-bar";
import { RoomsService } from "../../services/rooms/room.service";
import { Room } from "../../shared/models/room";
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';

describe('PlantNewComponent', () => {
  let component: PlantNewComponent;
  let fixture: ComponentFixture<PlantNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            FormsModule,
            AngularFireDatabaseModule,
            AngularFireAuthModule,
            AngularFireModule.initializeApp(environment.firebaseConfig, "greenhouse"),
            RouterModule.forRoot([]),
            MaterialModule,
          ],
      declarations: [ PlantNewComponent ],
      schemas: [NO_ERRORS_SCHEMA]
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    
  });

  // it( 'should render the plant title in the h2 tag', () => {
  //     fixture.componentInstance.plant = {name:'Jefke'};
      
  //     expect(fixture.nativeElement.querySelector('h2').textContent).toContain('Jefke');
  // } )

});


