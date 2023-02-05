package com.example.konex.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.konex.models.Producto;

import jakarta.transaction.Transactional;


@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {
	
  @Transactional
  Optional<Producto> findByNombre(String nombre);

}
