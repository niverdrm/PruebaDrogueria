package com.example.konex.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Producto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false, updatable = false)
	private int id;
	
	@Column( nullable = false, unique = true)
	private String nombre;
	
	@Column(nullable = false)
	private String  laboratorioFabrica;
	
	@Column(nullable = false)
	private Date fechaFabricacion;
	
	@Column(nullable = false)
	private Date fechaVencimiento;
	
	@Column(nullable = false)
	private int cantidadStock;
	
	@Column(nullable = false)
	private int valorUnitario;
	
	
	
	
	public Producto() {
		super();
	}


	public Producto(String nombre, String laboratorioFabrica, Date fechaFabricacion, Date fechaVencimiento,
			int cantidadStock, int valorUnitario) {
		
		this.nombre = nombre;
		this.laboratorioFabrica = laboratorioFabrica;
		this.fechaFabricacion = fechaFabricacion;
		this.fechaVencimiento = fechaVencimiento;
		this.cantidadStock = cantidadStock;
		this.valorUnitario = valorUnitario;
	}


	


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getLaboratorioFabrica() {
		return laboratorioFabrica;
	}


	public void setLaboratorioFabrica(String laboratorioFabrica) {
		this.laboratorioFabrica = laboratorioFabrica;
	}


	public Date getFechaFabricacion() {
		return fechaFabricacion;
	}


	public void setFechaFabricacion(Date fechaFabricacion) {
		this.fechaFabricacion = fechaFabricacion;
	}


	public Date getFechaVencimiento() {
		return fechaVencimiento;
	}


	public void setFechaVencimiento(Date fechaVencimiento) {
		this.fechaVencimiento = fechaVencimiento;
	}


	public int getCantidadStock() {
		return cantidadStock;
	}


	public void setCantidadStock(int cantidadStock) {
		this.cantidadStock = cantidadStock;
	}


	public int getValorUnitario() {
		return valorUnitario;
	}


	public void setValorUnitario(int valorUnitario) {
		this.valorUnitario = valorUnitario;
	}


	@Override
	public String toString() {
		return "Producto [nombre=" + nombre + ", laboratorioFabrica=" + laboratorioFabrica + ", FechaFabricación="
				+ fechaFabricacion + ", FechaVencimiento=" + fechaVencimiento + ", CantidadStock=" + cantidadStock
				+ ", ValorUnitario=" + valorUnitario + "]";
	}
	
	
	
	


}
