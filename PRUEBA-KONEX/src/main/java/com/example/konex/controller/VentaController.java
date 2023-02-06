package com.example.konex.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.konex.dto.Rango;
import com.example.konex.models.Venta;
import com.example.konex.service.VentaService;

@RestController
@RequestMapping("/api/drogueria")
public class VentaController {
	
	@Autowired
	VentaService ventaService;

	
	@PostMapping("/venta/crear")
	public ResponseEntity<Map<String, Object>> crearVenta(@RequestBody Venta nVenta){
		
		Map<String, Object> resp = new HashMap<>();
		
		Venta venta= ventaService.crear(nVenta);
		if(venta != null) {
			resp.put("ok", true);
			resp.put("msg", "venta realizada exitosamente");
		}else {
			resp.put("ok", false);
			resp.put("msg", "Algo salio datos errones ");

		}
		
		resp.put("data", venta);
		return  new ResponseEntity<>(resp, HttpStatus.OK);
		
	}
	
	@GetMapping("/ventas")
	public ResponseEntity<Map<String, Object>> listarVentas() {
		Map<String, Object> resp = new HashMap<>();

		

		List<Venta> ventas = new ArrayList<Venta>();
		ventaService.listar().forEach(ventas::add);

		resp.put("ok", true);
		resp.put("msg", "lista de ventas ");
		resp.put("data", ventas);

		return new ResponseEntity<>(resp, HttpStatus.OK);
	}
	@GetMapping("/ventas/rangos")
	public ResponseEntity<Map<String, Object>> listarVentasRangos(@RequestParam String desde, @RequestParam String hasta ){
		Map<String, Object> resp = new HashMap<>();
		List<Venta> ventas= new ArrayList<Venta>();
		
		System.out.println(desde+"mierd\n");
		System.out.println(hasta+"\n");
		
		
		
			Date desdesD = new Date(desde) ;
			Date hastaD = new Date(hasta) ;
		
			System.out.println("________________________"+"\n");
		 
		
		System.out.println(desdesD+"\n");
		System.out.println(hastaD+"\n");
		
		if (desdesD.compareTo(hastaD) == -1) {
			resp.put("ok", false);
			resp.put("msg", "el rango de fechas esta erroneo");
			resp.put("data",ventas );
		}

		ventaService.consularRangoFecha(desdesD, hastaD).forEach(ventas::add);
		
		if (ventas.size() == 0) {
			resp.put("ok", true);
			resp.put("msg", "no existen ventas en ese rango de fecha");
			resp.put("data",ventas );
		}
		
			resp.put("ok", true);
			resp.put("msg", "lista de ventas  entre rago de fecha");
			resp.put("data", ventas);

		
		return  new ResponseEntity<>(resp, HttpStatus.OK);
	}
	
}
