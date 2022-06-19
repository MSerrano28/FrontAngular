import { Component, OnInit } from '@angular/core';
import { Categoria, CategoriaUpdate } from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/servicio/categoria.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})

export class EditarComponent implements OnInit {
  titulo: string = 'Editar categoría';
  categoria: Categoria = new Categoria();
  categoriaUpdate: Categoria = new Categoria();

  constructor(
    private servicio: CategoriaService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));    
    this.getCategoria(id);
  }

  actualizar(categoriaUpdate: Categoria): void {    
    this.servicio
      .actualizarCategoria(categoriaUpdate, categoriaUpdate.idCategoria)
      .subscribe(() => {
        Swal.fire(
          'Categoria Almacenada Satisfactoriamente',
          'La categoria se Actualizó',
          'success'
        );
      },err=>{
        if(err.status==400){
          console.log(err )
          Swal.fire(
            'Haz superado el limite de caracteres',
            'No se ha podido actualizar',
            'error'
          )
        }
      });
  }

  getCategoria (id : number) : void {
    this.servicio.leerCategoria(id).subscribe( 
      categoria => {
        this.categoria = (categoria as any).categoria
        this.categoriaUpdate = this.categoria      
        console.log(this.categoriaUpdate);
    }); 
  }
}
