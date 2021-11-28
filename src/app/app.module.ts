import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { PerfilProfissionalComponent } from './componentes/perfil-profissional/perfil-profissional.component';
import { HistoricoProfissionalComponent } from './componentes/historico-profissional/historico-profissional.component';
import { FormacaoAcademicaComponent } from './componentes/formacao-academica/formacao-academica.component';
import { CursosComponent } from './componentes/cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilProfissionalComponent,
    HistoricoProfissionalComponent,
    FormacaoAcademicaComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
