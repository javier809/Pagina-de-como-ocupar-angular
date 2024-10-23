import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreacionDeProyectoComponent } from './pages/creacion-de-proyecto/creacion-de-proyecto.component';
import { DescripcionDePaquetesYComponentesComponent } from './pages/descripcion-de-paquetes-y-componentes/descripcion-de-paquetes-y-componentes.component';
import { CreacionDeComponentesPipesYServiciosComponent } from './pages/creacion-de-componentes-pipes-y-servicios/creacion-de-componentes-pipes-y-servicios.component';
import { PasosParaSubirAGithubComponent } from './pages/pasos-para-subir-a-github/pasos-para-subir-a-github.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    CreacionDeProyectoComponent,
    DescripcionDePaquetesYComponentesComponent,
    CreacionDeComponentesPipesYServiciosComponent,
    PasosParaSubirAGithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
