import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BDetailsComponent } from './b-details.component';

describe('BDetailsComponent', () => {
  let component: BDetailsComponent;
  let fixture: ComponentFixture<BDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BDetailsComponent]
    });
    fixture = TestBed.createComponent(BDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
