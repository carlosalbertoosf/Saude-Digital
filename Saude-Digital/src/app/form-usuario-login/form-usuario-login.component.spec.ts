import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUsuarioLoginComponent } from './form-usuario-login.component';

describe('FormUsuarioLoginComponent', () => {
  let component: FormUsuarioLoginComponent;
  let fixture: ComponentFixture<FormUsuarioLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormUsuarioLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUsuarioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
