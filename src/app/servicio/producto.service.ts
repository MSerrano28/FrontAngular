import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto, ProductoUpdate } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private endPoint: string = "http://localhost:8181/api/producto";// direccion de la api/
  constructor(private http : HttpClient) { }
  private httpHeaders = new HttpHeaders({'ContentType':'application/json'})

  listadoProducto() : Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.endPoint}/get-all`).pipe(map((response) => response as Producto[]));
  }

  getProducto(): Observable<Producto[]> {
    return this.http.get(this.endPoint).pipe(
      map(response => response as Producto[])
    );
  }

  eliminarProducto(id : number) : Observable<Producto> {
    return this.http.delete<Producto> (
      `${this.endPoint}/delete/${id}`,
      {headers : this.httpHeaders}
    )
  }

  leerProducto(id : number) : Observable<Producto> {
    return this.http.get<Producto>(`${this.endPoint}/get-one/${id}`).pipe(map((response) => response as Producto));
  }

  crearProducto(producto : Producto) : Observable<Producto> {
    return this.http.post<Producto> (
      `${this.endPoint}/create/${producto.idCategoria}`,
      producto,
      {headers : this.httpHeaders}
    )
  }

  actualizarProducto(producto : Producto, id: number) : Observable<Producto> {
    return this.http.put<Producto> (
      `${this.endPoint}/update/${id}`,
      producto,
      {headers : this.httpHeaders}
    )
  }
}
