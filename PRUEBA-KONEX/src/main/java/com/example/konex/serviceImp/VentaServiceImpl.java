package com.example.konex.serviceImp;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.konex.models.Producto;
import com.example.konex.models.Venta;
import com.example.konex.repository.ProductoRepository;
import com.example.konex.repository.VentaRepository;
import com.example.konex.service.VentaService;

@Service
public class VentaServiceImpl implements VentaService {
	
	@Autowired
	VentaRepository ventaRepository;
	
	@Autowired
	ProductoRepository  productoRepository;

	@Override
	public Venta crear(Venta venta) {
		
		Date fecha = new Date();
		venta.setFechaHora(fecha);
		
		Optional<Producto> productoDb = productoRepository.findById(venta.getIdProducto());
		
		if(productoDb.isPresent()) {
			
			int cantidadVenta = venta.getCantidad();
			if(cantidadVenta > productoDb.get().getCantidadStock() || cantidadVenta <= 0) {
				return null;
			}
			productoDb.get().setCantidadStock(productoDb.get().getCantidadStock()- cantidadVenta);
			
			int validarTotal = cantidadVenta * productoDb.get().getValorUnitario();
			if(validarTotal != venta.getValorTotal()) {
				 return null;
			}
			
			
		}
		
		return  ventaRepository.save(venta) ;
	}

	@Override
	public List<Venta> listar() {
		
		return ventaRepository.findAll();
	}

	@SuppressWarnings("deprecation")
	@Override
	public List<Venta> consularRangoFecha(Date desde, Date hasta) {
		
		List<Venta> ventas =ventaRepository.findAll();
		List<Venta> ventasDb =new ArrayList<>();
		
		
		desde.setDate(desde.getDate());
		hasta.setDate(hasta.getDate());
		desde.setHours(0);
		hasta.setHours(23);
		
		System.out.println(desde+"\n");
		System.out.println(hasta+"\n");
		
		for(int i=0; i< ventas.size(); i++) {
			if(hasta.compareTo(ventas.get(i).getFechaHora() ) >= 0 && desde.compareTo(ventas.get(i).getFechaHora())== -1) {
				System.out.println(ventas.get(i).toString());
				ventasDb.add(ventas.get(i));
			}
		}
		
		
		return ventasDb;
	}

}
