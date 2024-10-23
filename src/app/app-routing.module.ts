import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CreacionDeProyectoComponent } from './pages/creacion-de-proyecto/creacion-de-proyecto.component';
import { DescripcionDePaquetesYComponentesComponent } from './pages/descripcion-de-paquetes-y-componentes/descripcion-de-paquetes-y-componentes.component';
import { CreacionDeComponentesPipesYServiciosComponent } from './pages/creacion-de-componentes-pipes-y-servicios/creacion-de-componentes-pipes-y-servicios.component';
import { PasosParaSubirAGithubComponent } from './pages/pasos-para-subir-a-github/pasos-para-subir-a-github.component';

const routes: Routes = [

   {path: 'inicio',component:InicioComponent},
   {path: 'creacion-de-proyecto',component:CreacionDeProyectoComponent},
   {path: 'descripcion-de-paquetes-y-componentes',component:DescripcionDePaquetesYComponentesComponent},
   {path: 'creacion-de-componentes-pipes-y-servicios',component:CreacionDeComponentesPipesYServiciosComponent},
   {path: 'pasos-para-subir-a-github',component: PasosParaSubirAGithubComponent},
   {path: '**',component:InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
