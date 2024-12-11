import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEquipamentoComponent } from './form-equipamento.component';

describe('FormEquipamentoComponent', () => {
  let component: FormEquipamentoComponent;
  let fixture: ComponentFixture<FormEquipamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEquipamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
