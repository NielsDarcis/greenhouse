import { async, ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";

import { PlantTypesNewComponent } from "./plant-types-new.component";
import { Router, ActivatedRoute, RouterModule } from "@angular/router";
import { MatDialog, MatSnackBar } from "@angular/material";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ToCelciusPipe } from "src/app/shared/pipes/to-celcius.pipe";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { MaterialModule } from "src/app/shared/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";
import { PlanttypesService } from "src/app/services/planttypes/planttypes.service";
import { of } from "rxjs";
import { PlantType } from 'src/app/shared/models/plantType/plant-type';

describe("PlantTypesNewComponent", () => {
  let component: PlantTypesNewComponent;
  let fixture: ComponentFixture<PlantTypesNewComponent>;
  let mockPlantTypesService, mockActivatedRoute;
  let PLANTTYPES: PlantType[];
  beforeEach(() => {
    PLANTTYPES = [
      {
        id: "-Lrsl-OYU1hDt7XQf3-o",
        light: 34,
        maxTemp: 24,
        minTemp: -7,
        moist: 29,
        name: "Ficus",
        waterFreq: 5
      },
      {
        id: "-Lrsl8B_cwsZS-mhF3iP",
        light: 93,
        maxTemp: 33,
        minTemp: 23,
        moist: 47,
        name: "Licht Rode Braziliaanse Leisterbes",
        waterFreq: 4
      }
    ];
    mockPlantTypesService = jasmine.createSpyObj([
      "create",
      "update",
      "getById",
      "delete"
    ]);
    mockActivatedRoute = {
      snapshot: { paramMap: { get: () => { return '3';}}}
    }
    
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(
          environment.firebaseConfig,
          "greenhouse"
        ),
        RouterModule.forRoot([]),
        MaterialModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: PlanttypesService, useValue: mockPlantTypesService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ],
      declarations: [PlantTypesNewComponent, ToCelciusPipe],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PlantTypesNewComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the change you plant title if not empty", () => {
    fixture.componentInstance.plantType = {
      id: "-Lrsl-OYU1hDt7XQf3-o",
      light: 34,
      maxTemp: 24,
      minTemp: -7,
      moist: 29,
      name: "Ficus",
      waterFreq: 8
    };
    fixture.detectChanges();
    let elementH2 = fixture.debugElement.query(By.css("h2"));
    expect(elementH2.nativeElement.textContent).toContain("Ficus");
  });

  it("should set a planttype correctly from the service", fakeAsync(() =>  {
      mockPlantTypesService.getById.and.returnValue(PLANTTYPES[1]);
      fixture.detectChanges();
      console.log(fixture.componentInstance.plantType)
      tick();
      expect(fixture.componentInstance.plantType.name).toBe("Licht Rode Braziliaanse Leisterbes");       
    }));
});
