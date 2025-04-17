package com.gianny.crud.backend.services;


import com.gianny.crud.backend.dtos.VehicleDto;
import com.gianny.crud.backend.models.VehicleModel;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public interface VehicleService {


    List<VehicleDto> all();

    VehicleModel byId(Long id);

    ResponseEntity<VehicleDto> save(VehicleDto vehicle);
}
