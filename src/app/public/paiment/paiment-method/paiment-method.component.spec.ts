import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaimentMethodComponent } from './paiment-method.component';

describe('PaimentMethodComponent', () => {
  let component: PaimentMethodComponent;
  let fixture: ComponentFixture<PaimentMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaimentMethodComponent]
    });
    fixture = TestBed.createComponent(PaimentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
