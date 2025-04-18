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
@RequestMapping(value = VehicleController.REQUEST_MAPPING_NAME, produces = "application/json; charset=UTF-8")
public class VehicleController {

  public static final String REQUEST_MAPPING_NAME = "/api/v1/vehicles";
  private final VehicleService service;

  @GetMapping()
    public ResponseEntity<List<VehicleDto>> all(){
    return ResponseEntity.ok(service.all());
  }


  @GetMapping("/vehicles/{idVehicle}")
  public ResponseEntity<VehicleDto> get(@PathVariable Long idVehicle){
    return ResponseEntity.ok(this.service.byId(idVehicle).dto());
  }


  @PostMapping()
  public VehicleDto save(@Valid @RequestBody VehicleDto vehicle){
    return this.service.save(vehicle).dto();
  }
}
