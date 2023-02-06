import { Component, OnInit } from '@angular/core';
import { Rango } from 'src/app/models/rango';
import { Venta } from 'src/app/models/venta';
import { VentaService } from 'src/app/service/venta.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  public ventas: Venta[];
  public msg: string;
  public ini: number;

  constructor(private ventaService:VentaService) { 
    this.ventas = [];
    this.msg ='';
    this.ini=0;
  }

  ngOnInit(): void {
    this.getVentas();
  }

getVentas(){
  this.ventaService.ventas().subscribe((res:any) => {
      res.data ? this.ventas = res.data : this.msg = "No existen ventas para mostrar"
  })
}

siguiente(){
  this.ini =this.ini + 5;
}

atras(){
  if(this.ini > 0) this.ini = this.ini - 5;
}

consultar(desde:string, hasta:string){
this.getVentas();
 desde= desde.replace('-','/')
 desde= desde.replace('-','/')
 hasta=hasta.replace('-','/')
 hasta=hasta.replace('-','/')
  this.ventaService.consultaRango(desde,hasta).subscribe((res:any) =>{
    console.log(res);
    if(res.ok){
      this.ventas = res.data;
    }else{
      this.ventas = [];
    }

  }, (error) => console.log(error))
}

quitarFilter(){
  this.getVentas();
}

}
