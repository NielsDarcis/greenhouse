import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantTypesNewComponent } from './plant-types-new.component';

describe('PlantTypesNewComponent', () => {
  let component: PlantTypesNewComponent;
  let fixture: ComponentFixture<PlantTypesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantTypesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantTypesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
