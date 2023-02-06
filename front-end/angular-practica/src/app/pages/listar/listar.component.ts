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
  public productos: Producto[] ;
  public ini :number;
  public nombreBuscar:string;
  public isModal:boolean;
  public productoVender:Producto;

  constructor(

    private empleadoService:EmpleadoServiceService,
    private productoService :ProductoService,
    private router: Router
  ) {
    this.productos =[];
    this.ini=0;
    this.nombreBuscar ='';
    this.isModal =false;
    this.productoVender =new Producto();
  }

  ngOnInit(): void {
    this.listarProductos();
    // this.actualizar();
  }

 
  listarProductos(){
   this.productoService.listaProductos().subscribe((res:any) =>{
      if(res.data.length){
        this.productos = res.data;
        console.log('estoy actualizando');
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
      confirmButtonText: 'si , Borrar!'
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

  }



   emitirProducto(producto: Producto) {
    this.router.navigateByUrl('home');
    this.productoService.titulo = 'Editar';
    this.productoService.producto = producto;
  }


  buscarNombre(value:string){
 this.nombreBuscar = value;
  }

  siguiente(){
    this.ini =this.ini + 5;
  }

  atras(){
    if(this.ini > 0) this.ini = this.ini - 5;
  }



  isupdate(active: boolean) {
    this.isModal = false;
    this.listarProductos();
     this.productoService.listaProductos().subscribe((res:any) =>this.productos = res.data)
  }

  getProducto(producto:Producto){
    this.productoVender = producto;
    this.isModal = true;
  }
}
