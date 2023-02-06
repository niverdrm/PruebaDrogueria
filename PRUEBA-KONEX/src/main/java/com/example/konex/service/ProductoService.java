package com.example.konex.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.example.konex.models.Producto;

@Service
public interface ProductoService {

	public Producto buscarPorNombre(String nombre);
	public Producto crear(Producto producto);
	public List<Producto> listarProducto();
	public Producto editar(int id, Producto producto);
	public  boolean eliminar(int id);
	
	
}
