import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartonaComponent } from './cartona.component';

describe('CartonaComponent', () => {
  let component: CartonaComponent;
  let fixture: ComponentFixture<CartonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartonaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
