import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { EmpleadoServiceService } from 'src/app/service/empleado-service.service';
import { ProductoService } from 'src/app/service/producto.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent implements OnInit {
  productos: Producto[] ;

  constructor(

    private empleadoService:EmpleadoServiceService,
    private productoService :ProductoService,
    private router: Router
  ) {
    // this.listarEmpleados();
    this.productos =[];
  }

  ngOnInit(): void {
    this.listarProductos();
  }

  async listarEmpleados() {
  //   const resp: any = await this.empleadoService.listarEmpleados();
  //   this.empleados = resp.data;
  //   // resp.ok
  //   //   ? Swal.fire(resp.msg, '', 'success')
  //   //   : Swal.fire(resp.msg, '', 'error');
  }
 
  listarProductos(){
   this.productoService.listaProductos().subscribe((res:any) =>{
      if(res.data.length){
        this.productos = res.data;
        console.log(this.productos);
      }
   })
  }

  eliminarProducto(id?: number){

    Swal.fire({
      title: 'Esta seguro de eliminar este medicamento?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.productoService.eliminarProductos(id).subscribe((res:any) =>{
          if(res.ok){
            Swal.fire(res.msg, '', 'success');
            this.listarProductos();
          }else{
            Swal.fire('No pudo ser Eliminado', '', 'error');
          }
        })
      }
    })






    // this.productoService.eliminarProductos(id).subscribe((res:any) =>{
    //   if(res.ok){


        
    //     Swal.fire(res.msg, '', 'success');
    //     this.listarProductos;
    //   }else{
    //     Swal.fire('No pudo ser Eliminado', '', 'error');
    //   }
    // })
  }

  

  emitirEmpleado(empleado: any) {
    this.router.navigateByUrl('home');
    this.empleadoService.titulo = 'Editar';
    this.empleadoService.empleado = empleado;
  }
}
