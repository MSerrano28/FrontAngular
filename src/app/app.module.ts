import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';

import { CategoriaComponent } from './categoria/categoria.component';
import { ListadoComponent } from './categoria/listado/listado.component';
import { EditarComponent } from './categoria/editar/editar.component';

import { ProductoComponent } from './producto/producto.component';
import { ProductoListadoComponent } from './producto/listado/listado.component';
import { ProductoEditarComponent } from './producto/editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriaComponent,
    BienvenidoComponent,
    ListadoComponent,
    EditarComponent,
    ProductoComponent,
    ProductoListadoComponent,
    ProductoEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
