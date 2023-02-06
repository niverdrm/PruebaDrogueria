import { Pipe, PipeTransform } from '@angular/core';
import { Venta } from '../models/venta';

@Pipe({
  name: 'pagventas'
})
export class PagventasPipe implements PipeTransform {

  transform(ventas: Venta[], ini:number): Venta[] {
    return ventas.slice(ini,ini+5);;
  }

}
