import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingHeartsComponent } from './floating-hearts.component';

describe('FloatingHeartsComponent', () => {
  let component: FloatingHeartsComponent;
  let fixture: ComponentFixture<FloatingHeartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingHeartsComponent]
    });
    fixture = TestBed.createComponent(FloatingHeartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
