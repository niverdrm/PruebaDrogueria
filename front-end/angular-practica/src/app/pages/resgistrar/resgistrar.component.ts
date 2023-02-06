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
    private router: Router,
    private prodcutoService: ProductoService
  ) {
    this.formProducto = this.createFormProducto();
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
  ngOnInit(): void {
    this.cargarProducto();
    console.log('holaaaaaaaaaaaaa');
  }
   
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


    cargarProducto() {
      this.titulo = this.prodcutoService.titulo || 'Registrar';
      console.log(this.titulo, this.prodcutoService.producto.id);
      if(this.titulo === 'Registrar'){
        this.formProducto.reset();
      }
      if (this.prodcutoService.producto.id) {
        const {
          nombre, 
          laboratorioFabrica,
          fechaFabricacion,
          fechaVencimiento,
          cantidadStock,
          valorUnitario} =
          this.prodcutoService.producto;
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
    this.titulo === 'Editar' ? this.editarProducto() : this.registrarProducto();
    this.prodcutoService.titulo = 'Registrar';
    this.titulo = this.prodcutoService.titulo;
  }

  editarProducto(){
    this.prodcutoService.editarProductos(
      this.prodcutoService.producto.id || 0, this. formProducto.value).subscribe((res:any) => {
        this.titulo = 'Registrar';
    if(res.ok){
      Swal.fire(res.msg, '', 'success')
      this.router.navigateByUrl('listar')

    }else{
      Swal.fire(res.msg, '', 'error');

    }
      })
      this.prodcutoService.producto = new Producto();
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
