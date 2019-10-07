import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantTypesComponent } from './plant-types.component';

describe('PlantTypesComponent', () => {
  let component: PlantTypesComponent;
  let fixture: ComponentFixture<PlantTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
