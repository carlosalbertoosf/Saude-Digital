import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUsuarioCadastroComponent } from './form-usuario-cadastro.component';

describe('FormUsuarioCadastroComponent', () => {
  let component: FormUsuarioCadastroComponent;
  let fixture: ComponentFixture<FormUsuarioCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormUsuarioCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUsuarioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
