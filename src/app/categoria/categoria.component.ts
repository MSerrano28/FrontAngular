import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Categoria } from '../modelo/categoria';
import { CategoriaService } from '../servicio/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  titulo: string = 'Categorías';
  categoria: Categoria = new Categoria();
  msg: string = '';

  constructor(private service: CategoriaService) {}

  ngOnInit(): void {}

  almacenarCategoria(categoria: Categoria): void {
    this.service.crearCategoria(categoria).subscribe(
      (res) => {
        Swal.fire(
          '¡Datos Ingresados Correctamente!',
          'Categoría Almacenada Correctamente',
          'success'
        );
      },
      (err) => {
        for (let i = 0; i < err.error.errores.length; i++) {
          this.msg += err.error.errores[i] + '\n';
        }

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: this.msg,
        });
      }
    )
  }
}
