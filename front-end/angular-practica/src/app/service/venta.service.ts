import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rango } from '../models/rango';
import { Venta } from '../models/venta';

const base_url  = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { 

  }

  registrarVenta(venta: Venta) {
    return  this.http
      .post(`${base_url}/venta/crear`, venta).pipe(res =>  res)
  }
  ventas() {
    return  this.http
      .get(`${base_url}/ventas`).pipe(res =>  res)
  }


  consultaRango(desde:string, hasta:string) {
    
    return  this.http
      .get(`${base_url}/ventas/rangos?desde=${desde}&hasta=${hasta}`).pipe(res =>  res)
  }

}
