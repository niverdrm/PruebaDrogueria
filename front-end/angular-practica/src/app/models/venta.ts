export class Venta {
    
    fechaHora?:Date;
    medicamento?:string;
	cantidad?:number;
	valorUnitario?:number;
	valorTotal?:number;
	idProducto?:number;

    constructor(fechaHora?:Date,
        medicamento?:string,
        cantidad?:number,
        valorUnitario?:number,
        valorTotal?:number,
        idProducto?:number,
        ){
        this.fechaHora= fechaHora,
        this.medicamento= medicamento,
        this.cantidad= cantidad,
        this.valorUnitario= valorUnitario,
        this.valorTotal= valorTotal,
        this.idProducto= idProducto
 
    }


}
