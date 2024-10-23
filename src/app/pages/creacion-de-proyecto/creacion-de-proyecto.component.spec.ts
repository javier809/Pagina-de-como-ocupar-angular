import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionDeProyectoComponent } from './creacion-de-proyecto.component';

describe('CreacionDeProyectoComponent', () => {
  let component: CreacionDeProyectoComponent;
  let fixture: ComponentFixture<CreacionDeProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreacionDeProyectoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionDeProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
