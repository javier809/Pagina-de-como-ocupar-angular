import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionDePaquetesYComponentesComponent } from './descripcion-de-paquetes-y-componentes.component';

describe('DescripcionDePaquetesYComponentesComponent', () => {
  let component: DescripcionDePaquetesYComponentesComponent;
  let fixture: ComponentFixture<DescripcionDePaquetesYComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DescripcionDePaquetesYComponentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionDePaquetesYComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
