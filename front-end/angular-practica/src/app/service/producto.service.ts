import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto';

const base_url  = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public producto: Producto ;
  public titulo: string ;


  constructor(private http: HttpClient) { 
    this.producto  = new Producto();
    this.titulo ='';
    }


  registrarProducto(producto: Producto) {
    console.log(producto, 'coma mierda no sirve');
    return  this.http
      .post(`${base_url}/guardar_producto`, producto).pipe(res =>  res)
  }

  listaProductos() {
    return  this.http
      .get(`${base_url}/productos`).pipe(res =>  res)
  }

  eliminarProductos(id?:number) {
    return  this.http
      .delete(`${base_url}/eliminar?id=${id}`).pipe(res =>  res)
  }

  editarProductos( id:number, producto: Producto) {
    return  this.http
      .put(`${base_url}/actualizar?id=${id}`, producto).pipe(res =>  res)
  }

}
