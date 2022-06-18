import { Component, OnInit } from '@angular/core';
import { Producto, ProductoUpdate } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicio/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class ProductoEditarComponent implements OnInit {
  titulo: string = 'Listado de categorías';
  listadoDeCategorias: Producto[]= [

    {
      idProducto: 1,
      nombreProducto : 'Servidor Cargando',
      descripcionProducto: 'Espere..',
      precioProducto: 5,
      existencia: 0,
      fechaCreacion: new Date(12,12,2001),
      idCategoria: 1
    }
   
   
  ];
  producto: Producto = new Producto();
  productoupdate: ProductoUpdate = new ProductoUpdate();

  constructor(private servicio : ProductoService) { }
  numero : number = 0;
  idProductoProducto  : number = 0;

  ngOnInit(): void {
    this.servicio.getProducto().subscribe(
      (Productos) => this.listadoDeCategorias = Productos
    );
  }
  actualizar(producto: Producto): void {
    console.log(producto)
    this.servicio.actualizarProducto(producto,this.idProductoProducto).subscribe(
      () => {
        console.log(producto)
        console.log(this.idProductoProducto)
        Swal.fire(
          'Categoria Almacenada Satisfactoriamente',
          'La categoria se Actualizo',
          'success'
        );
        }
    )
    }

    AsignarId(id: number):void{
     this.idProductoProducto =  id;
    }

}
