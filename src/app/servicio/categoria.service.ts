import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categoria, CategoriaUpdate } from '../modelo/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private endPoint: string = "https://categoriaproducto.herokuapp.com/api/categoria";// direccion de la api/
  constructor(private http : HttpClient) { }
  private httpHeaders = new HttpHeaders({'ContentType':'application/json'})

  listadoCategorias() : Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.endPoint}/get-all`).pipe(map((response) => response as Categoria[]));
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get(this.endPoint).pipe(
      map(response => response as Categoria[])
    );
  }

  eliminarCategoria(id : number) : Observable<Categoria> {
    return this.http.delete<Categoria> (
      `${this.endPoint}/delete/${id}`,
      {headers : this.httpHeaders}
    )
  }

  leerCategoria(id : number) : Observable<Categoria> {
    return this.http.get<Categoria>(`${this.endPoint}/get-one/${id}`);
  } 

  crearCategoria(categoria : Categoria) : Observable<Categoria> {
    return this.http.post<Categoria> (
      `${this.endPoint}/create`,
      categoria,
      {headers : this.httpHeaders}
    )
  }

  actualizarCategoria(categoria : Categoria, id : Number) : Observable<Categoria> {
    return this.http.put<Categoria> (
      `${this.endPoint}/update/${categoria.idCategoria}`,
      categoria,
      {headers : this.httpHeaders}
    )
  }
}
