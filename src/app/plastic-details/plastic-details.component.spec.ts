import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasticDetailsComponent } from './plastic-details.component';

describe('PlasticDetailsComponent', () => {
  let component: PlasticDetailsComponent;
  let fixture: ComponentFixture<PlasticDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasticDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasticDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
