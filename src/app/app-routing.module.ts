import { HomeComponent } from './componentes/home/home.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { FormacaoAcademicaComponent } from './componentes/formacao-academica/formacao-academica.component';
import { HistoricoProfissionalComponent } from './componentes/historico-profissional/historico-profissional.component';
import { PerfilProfissionalComponent } from './componentes/perfil-profissional/perfil-profissional.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'perfil', component: PerfilProfissionalComponent},
  {path:'historico', component: HistoricoProfissionalComponent},
  {path:'formacao', component: FormacaoAcademicaComponent},
  {path:'cursos', component: CursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
