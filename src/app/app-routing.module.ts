import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ListadoComponent } from './categoria/listado/listado.component';
import { EditarComponent } from './categoria/editar/editar.component';

import { ProductoComponent } from './producto/producto.component';
import { ProductoListadoComponent } from './producto/listado/listado.component';
import { ProductoEditarComponent } from './producto/editar/editar.component';

const routes: Routes = [
  {path:'', component:BienvenidoComponent},
  {path:'categoria', component:CategoriaComponent},
  {path:'listadoCategoria', component:ListadoComponent},  
  {path:'editarCategoria/:id', component:EditarComponent},
  
  {path:'producto', component:ProductoComponent},
  {path:'listadoProducto', component:ProductoListadoComponent},  
  {path:'editarProducto/:id', component:ProductoEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {  }
