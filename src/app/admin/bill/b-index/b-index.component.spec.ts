import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BIndexComponent } from './b-index.component';

describe('BIndexComponent', () => {
  let component: BIndexComponent;
  let fixture: ComponentFixture<BIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BIndexComponent]
    });
    fixture = TestBed.createComponent(BIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
