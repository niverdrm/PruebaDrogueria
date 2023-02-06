package com.example.konex.service;

import java.util.Date;
import java.util.List;

import com.example.konex.models.Venta;

public interface VentaService {

	public Venta  crear(Venta venta);
	public List<Venta> listar();
	public List<Venta> consularRangoFecha(Date desde, Date hasta);
	
}
