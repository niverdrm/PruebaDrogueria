import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { EmpleadoServiceService } from 'src/app/service/empleado-service.service';
import { ProductoService } from 'src/app/service/producto.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-resgistrar',
  templateUrl: './resgistrar.component.html',
  styleUrls: ['./resgistrar.component.css'],
})
export class ResgistrarComponent implements OnInit {
  formProducto: FormGroup;
  public titulo: string = 'Registrar';
  producto :Producto;
  fecha:Date;

  constructor(
    private empleadoService: EmpleadoServiceService,
    private router: Router,
    private prodcutoService: ProductoService
  ) {
    this.formProducto = this.createFormProducto();
    // this.cargarEmpleado();
    this.fecha = new Date;
    this.producto = new Producto();
  }
  createFormProducto(): FormGroup {
    return new FormGroup({
      nombre: new FormControl('', Validators.required),
      laboratorioFabrica: new FormControl('', Validators.required),
      fechaFabricacion: new FormControl('', Validators.required),
      fechaVencimiento: new FormControl('', Validators.required),
      cantidadStock: new FormControl('', Validators.required),
      valorUnitario: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {}
   
   registrarProducto(){
    this.producto = this.formProducto.value;
    console.log(this.producto);
    this.prodcutoService.registrarProducto(this.producto).subscribe((res:any) =>{
     if( res.ok){
       Swal.fire(res.msg, '', 'success')
       this.router.navigateByUrl('listar');

     }else{
       Swal.fire(res.msg, '', 'error');
     } 
    }, (error) => console.log(error))

   }

  // async cargarEmpleado() {
  //   this.titulo = this.empleadoService.titulo || 'Registrar';
  //   if (this.empleadoService.empleado) {
  //     const {
  //       nombre, 
  //       laboratorioFabrica,
  //       fechaFabricacion,
  //       fechaVencimiento,
  //       cantidadStock,
  //       valorUnitario, } =
  //       this.empleadoService.empleado;
  //     this.formProducto.setValue({
  //       nombre, 
  //       laboratorioFabrica,
  //       fechaFabricacion,
  //       fechaVencimiento,
  //       cantidadStock,
  //       valorUnitario
  //     });
  //     this.producto= this.formProducto;
  //   }
  // }



   async cargarProducto() {
      this.titulo = this.prodcutoService.titulo || 'Registrar';
      if (this.empleadoService.empleado) {
        const {
          nombre, 
          laboratorioFabrica,
          fechaFabricacion,
          fechaVencimiento,
          cantidadStock,
          valorUnitario, } =
          this.empleadoService.empleado;
        this.formProducto.setValue({
          nombre, 
          laboratorioFabrica,
          fechaFabricacion,
          fechaVencimiento,
          cantidadStock,
          valorUnitario
        });
        this.producto= this.formProducto.value;
      }
    }

  validarEditarCrear() {
    this.titulo === 'Editar' ? this.editarEmpleado() : this.registrarProducto();
    this.prodcutoService.titulo = 'Registrar';
    this.titulo = this.prodcutoService.titulo;
  }
  // validarEditarCrear() {
  //   this.titulo === 'Editar' ? this.editarEmpleado() : this.registrarEmpleado();
  //   this.empleadoService.titulo = 'Registrar';
  //   this.titulo = this.empleadoService.titulo;
  // }

  async registrarEmpleado() {
    console.log(this.formProducto.value);
    // const resp: any = await this.empleadoService.registrarEmpleado(
    //   this.formProducto.value
    // );
    // resp.ok
    //   ? Swal.fire(resp.msg, '', 'success')
    //   : Swal.fire(resp.msg, '', 'error');
    // this.router.navigateByUrl('listar');
  }
  async editarEmpleado() {
    const resp: any = await this.empleadoService.editarEmpleado(
      this.empleadoService.empleado.id,
      this.formProducto.value
    );
    this.titulo = 'Registrar';
    resp.ok
      ? Swal.fire(resp.msg, '', 'success')
      : Swal.fire(resp.msg, '', 'error');

   
  }

   



  // get formulario
  get nombre() {
    return this.formProducto.get('nombre');
  }

  get laboratorioFabrica(){
    return this.formProducto.get('laboratorioFabrica')
  }
  get fechaFabricacion(){
    return this.formProducto.get('fechaFabricacion')
  }
  get fechaVencimiento(){
    return this.formProducto.get('fechaVencimiento')
  }
  get cantidadStock(){
    return this.formProducto.get('cantidadStock')
  }
  get valorUnitario(){
    return this.formProducto.get('valorUnitario')
  }


}
