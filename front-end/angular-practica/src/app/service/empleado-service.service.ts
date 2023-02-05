import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoServiceService {
  public empleado: any = null;
  public titulo: string = '';
  constructor(private http: HttpClient) {}

  async registrarEmpleado(empleado: any) {
    return await this.http
      .post('http://localhost:8080/api/empleado/guardar', empleado)
      .toPromise();
  }
  async listarEmpleados() {
    return await this.http
      .get('http://localhost:8080/api/empleado/empleados')
      .toPromise();
  }
  async eliminarEmpleados(id: number) {
    console.log(id, 'service');
    return await this.http
      .delete(`http://localhost:8080/api/empleado/eliminar/${id}`)
      .toPromise();
  }

  async editarEmpleado(id: number, empleado: any) {
    console.log(empleado);
    return await this.http
      .put(`http://localhost:8080/api/empleado/actualizar/${id}`, empleado)
      .toPromise();
  }
}
