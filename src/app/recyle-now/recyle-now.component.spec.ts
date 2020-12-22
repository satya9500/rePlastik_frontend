import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyleNowComponent } from './recyle-now.component';

describe('RecyleNowComponent', () => {
  let component: RecyleNowComponent;
  let fixture: ComponentFixture<RecyleNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecyleNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyleNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
