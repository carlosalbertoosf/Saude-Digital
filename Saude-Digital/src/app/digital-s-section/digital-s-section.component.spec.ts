import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSSectionComponent } from './digital-s-section.component';

describe('DigitalSSectionComponent', () => {
  let component: DigitalSSectionComponent;
  let fixture: ComponentFixture<DigitalSSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalSSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalSSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
