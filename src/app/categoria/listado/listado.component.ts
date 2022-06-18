import { Component, OnInit } from '@angular/core';
import { Categoria, CategoriaUpdate } from '../../modelo/categoria';
import { CategoriaService } from '../../servicio/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  titulo:string = "Listado de categorias";
  listadoDeCategorias : Categoria[] = [
    {
      idCategoria : 1,
      nombreCategoria : 'Servidor Cargando',
      descripcionCategoria: 'Espere..'
  
    }
  ];
  categoria: Categoria = new Categoria();
  categoriaupdate: CategoriaUpdate = new CategoriaUpdate();
  constructor(private servicio : CategoriaService) { }
  numero : number = 0;
  idCategoriaCategoria: number = 0;
  ngOnInit(): void {
    this.servicio.listadoCategorias().subscribe( (categorias) => {this.listadoDeCategorias = categorias
      console.log(this.listadoDeCategorias)
    });    
  }

  eliminar (categoria : Categoria) : void {
    Swal.fire({
      title:'Eliminar categoria',
      text: `Estás seguro que deseas eliminar la Categoria ${categoria.idCategoria}`,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminalo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminarCategoria(categoria.idCategoria)
        .subscribe((respuesta) => {
          this.servicio.listadoCategorias()
          .subscribe((categorias) => (this.listadoDeCategorias = categorias))
        })
        Swal.fire(
          'Eliminado!',
          'La Categoria se ha eliminado',
          'success'
        )
      }
    })
  }

  

}
