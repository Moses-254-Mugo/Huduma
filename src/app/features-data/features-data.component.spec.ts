import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesDataComponent } from './features-data.component';

describe('FeaturesDataComponent', () => {
  let component: FeaturesDataComponent;
  let fixture: ComponentFixture<FeaturesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
