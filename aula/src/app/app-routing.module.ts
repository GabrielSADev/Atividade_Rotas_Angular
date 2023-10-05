import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaslistComponent } from './app/pessoas/pessoaslist/pessoaslist.component';
import { IndexComponent } from './layout/index/index.component';
import { LoginComponent } from './sistema/login/login.component';
import { PessoasdetailsComponent } from './pessoas/pessoasdetails/pessoasdetails.component';
import { LivrosdetailsComponent } from './livros/livrosdetails/livrosdetails.component';
import { CarrosdetailsComponent } from './carros/carrosdetails/carrosdetails.component';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';
import { CarroslistComponent } from './carros/carroslist/carroslist.component';

const routes: Routes = [
  { path:"", redirectTo: "login", pathMatch: 'full' },
  { path:"login", component: LoginComponent },
  { path: "admin", component: IndexComponent, children:[
      {path: "pessoas", component: PessoaslistComponent},
      {path: "pessoas/novo", component: PessoasdetailsComponent},
      {path: "pessoas/editar/:id", component: PessoasdetailsComponent},
      {path: "livros", component: LivroslistComponent},
      {path: "livros/novo", component: LivrosdetailsComponent},
      {path: "livros/editar/:id", component: LivrosdetailsComponent},
      {path: "carros", component: CarroslistComponent},
      {path: "carros/novo", component: CarrosdetailsComponent},
      {path: "carros/editar/:id", component: CarrosdetailsComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
