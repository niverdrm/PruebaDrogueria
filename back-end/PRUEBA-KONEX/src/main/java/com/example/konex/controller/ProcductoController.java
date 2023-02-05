package com.example.konex.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.konex.models.Producto;
import com.example.konex.service.ProductoService;


import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/drogueria")
@AllArgsConstructor
public class ProcductoController {

	@Autowired(required=true)
	private ProductoService productoService;
	
	@PostMapping("/guardar_producto")
	public ResponseEntity<Map<String, Object>>   guardarEmpleado (@RequestBody Producto producto) {
		Map<String, Object> resp = new HashMap<>();
	     
		Date fechaActual = new Date();
		producto.getFechaVencimiento().setDate(producto.getFechaVencimiento().getDate()+1);
	
		if(producto.getFechaFabricacion().after(fechaActual)) {
			resp.put("ok", false);
			resp.put("msg", "Fecha de fabricación no valida");
			return new ResponseEntity<>(resp, HttpStatus.OK);
		}
		
		if(producto.getFechaVencimiento().before(fechaActual)) {
			resp.put("ok", false);
			resp.put("msg", "Fecha de vencimiento no valida");
			return new ResponseEntity<>(resp, HttpStatus.OK);
		}
		
		if(producto.getCantidadStock() <= 0 || producto.getValorUnitario() <= 0 ) {
			resp.put("ok", false);
			resp.put("msg", "el valor unitario o la cantidad en stock debe ser mayor a cero");
			return new ResponseEntity<>(resp, HttpStatus.OK);
		}
		
		Producto productoAux = productoService.crear(producto);
		
		
		if(productoAux != null) {
			resp.put("ok", true);
			resp.put("msg", "producto registrado exitosamente !!");
			
		}else {
			resp.put("ok", false);
			resp.put("msg", "El nombre del producto  ya existe");
		}
		resp.put("data", productoAux);
		
		return new ResponseEntity<>(resp, HttpStatus.OK);
	}
	
	@GetMapping("/productos")
	public ResponseEntity<Map<String, Object>> listFileAccount() {
		Map<String, Object> response = new HashMap<>();

		List<Producto> productos = new ArrayList<Producto>();
		productoService.listarProducto().forEach(productos::add);

		response.put("ok", true);
		response.put("data", productos);
		response.put("msg", "Lista de productos");

		return new ResponseEntity<>(response, HttpStatus.OK);

	}
	
	@DeleteMapping("/eliminar")
	public  ResponseEntity<Map<String, Object>>  eliminarEmpleado(@RequestParam int id) {
		
		boolean  isEliminado = productoService.eliminar(id);
		
		Map<String, Object> response = new HashMap<>();
		response.put("ok",isEliminado );
		if(isEliminado) {
			response.put("msg", " Producto eliminado con exito");
		}else {
			response.put("msg", "NO existe el producto");	
		}
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	@PutMapping("actualizar")
	public ResponseEntity<Map<String, Object>> actualizarEmpleado(@RequestParam int id, @RequestBody Producto producto) {

		Producto productoAux = productoService.editar(id, producto);

		Map<String, Object> response = new HashMap<>();

		if (productoAux != null) {
			response.put("ok", true);
			response.put("msg", "Producto ha sido  Actualizado");
		} else {
			response.put("ok", true);
			response.put("msg", "El nombre de ese producto ya existe");
		}
		response.put("data", productoAux);

		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	
	
}
