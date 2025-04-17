package com.gianny.crud.backend.controllers;

import com.gianny.crud.backend.dtos.VehicleDto;
import com.gianny.crud.backend.services.VehicleService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Log4j2
@RequiredArgsConstructor
@RestController
public class VehicleController {

  private final VehicleService service;

  @GetMapping("/vehicles")
    public ResponseEntity<List<VehicleDto>> all(){
    return ResponseEntity.ok(service.all());
  }


  @GetMapping("/vehicles/{idVehicle}")
  public ResponseEntity<VehicleDto> get(@PathVariable Long idVehicle){
    return ResponseEntity.ok(this.service.byId(idVehicle).dto());
  }


  @PostMapping("/vehicles")
  public VehicleDto save(@Valid @RequestBody VehicleDto vehicle){
    return this.service.save(vehicle).dto();
  }
}
