import { Component, OnInit } from '@angular/core';

import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicio/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ProductoListadoComponent implements OnInit {

  titulo: string = "Listado de Productos";
  listadoDeProductos: Producto[] = [];

  constructor(private servicio: ProductoService) { }

  ngOnInit(): void {
    this.servicio.listadoProducto().subscribe( (productos) => {this.listadoDeProductos = productos}); 
  }

  eliminar (producto : Producto) : void {
    Swal.fire({
      title:'Eliminar categoria',
      text: `Estás seguro que deseas eliminar el producto? ${producto.idProducto}`,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminalo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminarProducto(producto.idProducto)
        .subscribe((respuesta) => {
          this.servicio.listadoProducto()
          .subscribe((categorias) => (this.listadoDeProductos = categorias))
        })
        Swal.fire(
          'Eliminado!',
          'El producto se ha eliminado',
          'success'
        )
      }
    })
  }

}
