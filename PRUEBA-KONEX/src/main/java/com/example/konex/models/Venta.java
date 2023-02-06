package com.example.konex.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Venta {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(nullable = false, updatable = false)
	private int id;
	
	@Column(nullable = false)
	private Date fechaHora;
	
	@Column(nullable = false)
	private String medicamento;
	
	@Column(nullable = false)
	private int cantidad;
	
	@Column(nullable = false)
	private int valorUnitario;
	
	@Column(nullable = false)
	private int valorTotal;
	
	@Column(nullable = false)
	private int idProducto;
	
	

	public Venta() {
		super();
	}

	public Venta(Date fechaHora, String medicamento, int cantidad, int valorUnitario, int valorTotal, int idProducto) {
		
		this.fechaHora = fechaHora;
		this.medicamento = medicamento;
		this.cantidad = cantidad;
		this.valorUnitario = valorUnitario;
		this.valorTotal = valorTotal;
		this.idProducto = idProducto;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getFechaHora() {
		return fechaHora;
	}

	public void setFechaHora(Date fechaHora) {
		this.fechaHora = fechaHora;
	}

	public String getMedicamento() {
		return medicamento;
	}

	public void setMedicamento(String medicamento) {
		this.medicamento = medicamento;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public int getValorUnitario() {
		return valorUnitario;
	}

	public void setValorUnitario(int valorUnitario) {
		this.valorUnitario = valorUnitario;
	}

	public int getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(int valorTotal) {
		this.valorTotal = valorTotal;
	}

	public int getIdProducto() {
		return idProducto;
	}

	public void setIdProducto(int idProducto) {
		this.idProducto = idProducto;
	}

	@Override
	public String toString() {
		return "Venta [id=" + id + ", fechaHora=" + fechaHora + ", medicamento=" + medicamento + ", cantidad="
				+ cantidad + ", valorUnitario=" + valorUnitario + ", valorTotal=" + valorTotal + ", idProducto="
				+ idProducto + "]";
	}
	
	

	
	
	
}
