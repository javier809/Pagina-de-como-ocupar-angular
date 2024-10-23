import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionDeComponentesPipesYServiciosComponent } from './creacion-de-componentes-pipes-y-servicios.component';

describe('CreacionDeComponentesPipesYServiciosComponent', () => {
  let component: CreacionDeComponentesPipesYServiciosComponent;
  let fixture: ComponentFixture<CreacionDeComponentesPipesYServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreacionDeComponentesPipesYServiciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionDeComponentesPipesYServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
