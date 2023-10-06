import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaslistComponent } from './app/pessoas/pessoaslist/pessoaslist.component';
import { IndexComponent } from './layout/index/index.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PessoasdetailsComponent } from './pessoas/pessoasdetails/pessoasdetails.component';
import { LoginComponent } from './sistema/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarroslistComponent } from './carros/carroslist/carroslist.component';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';
import { CarrosdetailsComponent } from './carros/carrosdetails/carrosdetails.component';
import { LivrosdetailsComponent } from './livros/livrosdetails/livrosdetails.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PessoaslistComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    PessoasdetailsComponent,
    LoginComponent,
    CarroslistComponent,
    LivroslistComponent,
    CarrosdetailsComponent,
    LivrosdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
