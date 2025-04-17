package com.gianny.crud.backend.controllers;

import com.gianny.crud.backend.dtos.VehicleDto;
import com.gianny.crud.backend.services.VehicleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RequiredArgsConstructor
@RestController
public class VehicleController {

  private final VehicleService service;

  @GetMapping("/vehicles")
    public ResponseEntity<List<VehicleDto>> all(){
    return ResponseEntity.ok(service.all());
  }


  @GetMapping("/vehicles/{idVehicle}")
  public ResponseEntity<VehicleDto> getVehicle(@PathVariable Long idVehicle){
    return ResponseEntity.ok(service.byId(idVehicle));
  }

}
