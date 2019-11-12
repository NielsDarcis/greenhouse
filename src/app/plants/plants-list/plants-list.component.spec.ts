import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, OnInit, ViewChild, NO_ERRORS_SCHEMA } from "@angular/core";
import { PlantsService } from "../../services/plants/plants.service";
import { Plant } from "../../shared/models/plant/plant";
import { MatSort } from "@angular/material/sort";
import { Router, RouterModule } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { PlantsListComponent } from "./plants-list.component";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { MaterialModule } from "src/app/shared/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { DropMakerComponent } from "src/app/shared/drop-maker/drop-maker.component";
import { SunMakerComponent } from "src/app/shared/sun-maker/sun-maker.component";
import { FrostMakerComponent } from "src/app/shared/frost-maker/frost-maker.component";
import { TimeMakerComponent } from "src/app/shared/time-maker/time-maker.component";
import { FireMakerComponent } from "src/app/shared/fire-maker/fire-maker.component";
import { of } from "rxjs";

describe("PlantsListComponent", () => {
  let component: PlantsListComponent;
  let fixture: ComponentFixture<PlantsListComponent>;
  let mockHeroService;
  let PLANTS;

  beforeEach(() => {
    PLANTS = [{ name: "Jefke" }];
    mockHeroService = jasmine.createSpyObj(["getAll"]);
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
      declarations: [
        PlantsListComponent,
        DropMakerComponent,
        SunMakerComponent,
        FrostMakerComponent,
        TimeMakerComponent,
        FireMakerComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: PlantsService, useValue: mockHeroService }]
    }).compileComponents();
    fixture = TestBed.createComponent(PlantsListComponent);
  });

  //   beforeEach(() => {
  //   });

  it("should create", () => {
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it("should set plants correctly from the service", () => {
    fixture.whenStable().then(() => {
      let x = mockHeroService.getAll.and.returnValue(PLANTS);
      fixture.detectChanges();
      console.log(fixture.componentInstance.plantList, x);
      expect(fixture.componentInstance.plantList.length).toBe(2);
    });
  });
});
