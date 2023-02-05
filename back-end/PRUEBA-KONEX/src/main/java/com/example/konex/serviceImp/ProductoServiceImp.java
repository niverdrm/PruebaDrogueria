package com.example.konex.serviceImp;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.konex.models.Producto;
import com.example.konex.repository.ProductoRepository;
import com.example.konex.service.ProductoService;

@Service
public class ProductoServiceImp  implements ProductoService{
	
	@Autowired
	private ProductoRepository productoRepository;

	@Override
	public Producto buscarPorNombre(String nombre) {

		Optional<Producto> productoDb = productoRepository.findByNombre(nombre);

		if (productoDb.isPresent()) {
			System.out.println(productoDb.toString());
			return productoDb.get();
		}
		return null;
	}

	@Override
	public Producto crear(Producto producto) {

		Producto productoDb = buscarPorNombre(producto.getNombre());

		if (productoDb != null) {
			return null;
		}
		return productoRepository.save(producto);
	}

	@Override
	public List<Producto> listarProducto() {
		
		return productoRepository.findAll();
	}

	@Override
	public boolean eliminar(int id) {

		Optional<Producto> productoDb = productoRepository.findById(id);

		if (productoDb.isPresent()) {
			productoRepository.deleteById(id);
			return true;
		}

		return false;
	}

	@Override
	public Producto editar(int id, Producto producto) {
		
		
		Producto productoNombredb = buscarPorNombre(producto.getNombre());

		if (productoNombredb != null) {
			return null;
		}
		
		Optional<Producto>  productoDb = productoRepository.findById(id);
		
		if(productoDb.isPresent()) {
			   
			Producto producotAux = productoDb.get();
			  
			producotAux.setNombre(producto.getNombre()); 
			producotAux.setLaboratorioFabrica(producto.getLaboratorioFabrica()); 
			producotAux.setFechaFabricacion(producto.getFechaFabricacion()); 
			producotAux.setFechaVencimiento(producto.getFechaVencimiento()); 
			producotAux.setCantidadStock(producto.getCantidadStock()); 
			producotAux.setValorUnitario(producto.getValorUnitario());
			
			Producto producotActualizado = productoRepository.save(producotAux);
			return  producotActualizado;
		}
		
		return null;
	}

	


	

}
