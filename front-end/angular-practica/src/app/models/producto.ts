export class Producto {
    id?:number;
    nombre?: string;
    laboratorioFabrica?:string;
    fechaFabricacion?: Date;
    fechaVencimiento?:Date;
    cantidadStock?:number;
    valorUnitario?:number;

     constructors(
        nombre:string,
        laboratorioFabrica:string,
        fechaFabricacion: Date,
        fechaVencimiento:Date,
        cantidadStock:number,
        valorUnitario:number
     ){
        this.nombre = nombre;
        this.laboratorioFabrica=laboratorioFabrica;
        this.fechaFabricacion= fechaFabricacion;
        this.fechaVencimiento= fechaVencimiento;
        this.cantidadStock=  cantidadStock;
        this.valorUnitario=    valorUnitario;
        
     }
}
