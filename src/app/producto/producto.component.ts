import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Producto } from '../modelo/producto';
import { Categoria } from '../modelo/categoria';
import { ProductoService } from '../servicio/producto.service';
import { CategoriaService } from '../servicio/categoria.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  titulo: string = 'Crear Producto';
  producto: Producto = new Producto();
  listadoDeCategorias: Categoria[] = [];
  msg: string = '';

  constructor(private service: ProductoService, private serviceCategoria: CategoriaService) { 
    this.getCategorias()
  }

  ngOnInit(): void {
    this.producto.idCategoria = new Categoria(); 
  }

  almacenarProducto(producto: Producto): void {
    console.log(producto)
    producto.idCategoria=this.listadoDeCategorias.filter(cat=>cat.idCategoria==producto.idCategoria.idCategoria)[0];
    this.service.crearProducto(producto).subscribe(
      (res) => {
        Swal.fire(
          '¡Datos Ingresados Correctamente!',
          'Producto Almacenado Correctamente',
          'success'
        );
      },
      (err) => {
        console.log(err)
        if(err.error?.errores){
          for (let i = 0; i < err.error.errores.length; i++) {
            this.msg += err.error.errores[i] + '\n';
          }
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: this.msg,
          });
        }
      }
    );
  }

  getCategorias () : void {
    this.serviceCategoria.listadoCategorias().subscribe( (categorias) => {this.listadoDeCategorias = categorias
      console.log(this.listadoDeCategorias)
    }); 
  }
}
