package com.example.konex.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.konex.models.Venta;

@Repository
public interface VentaRepository extends JpaRepository<Venta, Integer> {

}
