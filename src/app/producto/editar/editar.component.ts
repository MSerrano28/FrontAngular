import { Component, OnInit } from '@angular/core';
import { Producto, ProductoUpdate } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicio/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class ProductoEditarComponent implements OnInit {
  titulo: string = 'Listado de categorías';  
  producto: Producto = new Producto();
  productoUpdate : Producto = new Producto();
  productoupdate: ProductoUpdate = new ProductoUpdate();

  constructor(private servicio : ProductoService, private route : ActivatedRoute ) { }
  numero : number = 0;
  idProductoProducto  : number = 0;

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'))
    this.servicio.leerProducto(id).subscribe(
      (producto) => {
        this.producto = (producto as any).categoria        
        this.productoUpdate = this.producto  
      }
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
