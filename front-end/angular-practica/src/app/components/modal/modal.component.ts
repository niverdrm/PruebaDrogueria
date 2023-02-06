import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Venta } from 'src/app/models/venta';
import { ProductoService } from 'src/app/service/producto.service';
import { VentaService } from 'src/app/service/venta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() isClosed = new EventEmitter<boolean>();
  // @Output() show = new EventEmitter<boolean>();
  @Input() productoVender: Producto;

  public isUpdate: boolean ;
  public isExist: boolean ;
  public total:number;
  public cantidadIn:number;


  constructor(
    private ventaService: VentaService,
    private productoService:ProductoService
    
    ) { 
    this.productoVender = new Producto();
    this.isUpdate =false;
    this.isExist =true;
    this.total=0;
    this.cantidadIn=0;
  }

  ngOnInit(): void {
  }

  close() {
    this.isClosed.emit(false);
  }

  getProductos(){
    this.productoService.listaProductos();
  }


  calcularTotal(cantidad:string){
    this.isExist = true;
    if(!cantidad){
        this.total =0
        return;
    }
    this.cantidadIn= parseInt(cantidad);
    if(this.cantidadIn  > this.productoVender.cantidadStock!  || this.cantidadIn <= 0){
        this.isExist = false;
    }
    this.total = this.productoVender.valorUnitario! * this.cantidadIn;
  }

  vender(){
    let venta: Venta = new Venta();
    const {nombre,valorUnitario,id} = this.productoVender
    venta.medicamento =nombre;
    venta.valorUnitario=valorUnitario;
    venta.idProducto=id;
    venta.valorTotal= this.total;
    venta.cantidad =this.cantidadIn;
    this.ventaService.registrarVenta(venta).subscribe((res:any) => {
      if( res.ok){
        Swal.fire(res.msg, '', 'success')
        // this.router.navigateByUrl('listar');
      }else{
        Swal.fire(res.msg, '', 'error');
      } 
    },(error) => console.log(error) )

    this.isClosed.emit(false);
    this.isUpdate = true;
  }

}
