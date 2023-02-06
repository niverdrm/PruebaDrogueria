import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../models/producto';

@Pipe({
  name: 'paginacion'
})
export class PaginacionPipe implements PipeTransform {

  transform(productos: Producto[], ini: number, nombre:string): Producto[] {

    if(nombre.length === 0) return productos.slice(ini,ini+5);

    const productosFiltrados = productos.filter((producto:Producto) => producto.nombre?.includes(nombre) )
    return productosFiltrados.slice(ini,ini+5);
  }

}
