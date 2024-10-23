import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasosParaSubirAGithubComponent } from './pasos-para-subir-a-github.component';

describe('PasosParaSubirAGithubComponent', () => {
  let component: PasosParaSubirAGithubComponent;
  let fixture: ComponentFixture<PasosParaSubirAGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasosParaSubirAGithubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasosParaSubirAGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
