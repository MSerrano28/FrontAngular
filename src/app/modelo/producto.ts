import { Categoria } from "./categoria";

export class Producto {
    idProducto : number = 0;
    nombreProducto : string = '';
    descripcionProducto: string = '';
    precioProducto: number = 0;
    existencia: number = 0;
    fechaCreacion: string = '';
    idCategoria!: Categoria;
}/**Pregunta para que es el signo de exclamacion  */

export class ProductoUpdate {
    idProducto : number = 0;
    nombreProducto : string = '';
    descripcionProducto: string = '';
    precioProducto: number = 0;
    existencia: number = 0;
    fechaCreacion: Date = new Date();
    idCategoria!: Categoria;
}