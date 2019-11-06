import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantNewComponent } from './plant-new.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

describe('PlantNewComponent', () => {
  let component: PlantNewComponent;
  let fixture: ComponentFixture<PlantNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantNewComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ AngularFireDatabaseModule, AngularFireAuth,
        AngularFireModule.initializeApp(environment.firebaseConfig, "greenhouse")]
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
});
