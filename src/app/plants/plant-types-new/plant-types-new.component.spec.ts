import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlantTypesNewComponent } from "./plant-types-new.component";
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToCelciusPipe } from 'src/app/shared/pipes/to-celcius.pipe';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MaterialModule } from 'src/app/shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe("PlantTypesNewComponent", () => {
  let component: PlantTypesNewComponent;
  let fixture: ComponentFixture<PlantTypesNewComponent>;
  let PLANTTYPES;
  let mockPlantTypeService;
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [PlantTypesNewComponent]
  //   }).compileComponents();
  //   PLANTTYPES = [
  //     {
  //       "-LrnM1Dpw209WMF7Oz8k": {
  //         id: "-LrnM1Dpw209WMF7Oz8k",
  //         light: 11,
  //         maxTemp: 18,
  //         minTemp: -35,
  //         moist: 6,
  //         name: "Eik",
  //         waterFreq: 2
  //       }
  //     },
  //     {
  //       "-Lro8uDUPDer2VTdfYmx": {
  //         id: "-Lro8uDUPDer2VTdfYmx",
  //         light: 23,
  //         maxTemp: 60,
  //         minTemp: 2,
  //         moist: 50,
  //         name: "Vijgenboom",
  //         waterFreq: 4
  //       }
  //     },
  //     {
  //       "-Lrsl-OYU1hDt7XQf3-o": {
  //         id: "-Lrsl-OYU1hDt7XQf3-o",
  //         light: 34,
  //         maxTemp: 24,
  //         minTemp: -7,
  //         moist: 29,
  //         name: "Ficus",
  //         waterFreq: 8
  //       }
  //     }
  //   ];
  //   mockPlantTypeService = jasmine.createSpyObj(['create','update','delete'])
  //   component = new PlantTypesNewComponent(mockPlantTypeService, Router, ActivatedRoute,MatDialog, MatSnackBar)
  // }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig, "greenhouse"),
        RouterModule.forRoot([]),
        MaterialModule,
        BrowserAnimationsModule,
      ],
      declarations: [PlantTypesNewComponent, ToCelciusPipe],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PlantTypesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
