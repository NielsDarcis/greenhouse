import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunMakerComponent } from './sun-maker.component';

describe('SunMakerComponent', () => {
  let component: SunMakerComponent;
  let fixture: ComponentFixture<SunMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
