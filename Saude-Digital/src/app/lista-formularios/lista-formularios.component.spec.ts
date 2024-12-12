import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFormulariosComponent } from './lista-formularios.component';

describe('ListaFormulariosComponent', () => {
  let component: ListaFormulariosComponent;
  let fixture: ComponentFixture<ListaFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaFormulariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
