package com.gianny.crud.backend.services.impl;

import com.gianny.crud.backend.dtos.VehicleDto;
import com.gianny.crud.backend.exceptions.AppException;
import com.gianny.crud.backend.services.VehicleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;


@Log4j2
@RequiredArgsConstructor
@Service
public class VehicleServiceImpl implements VehicleService {

    List<VehicleDto> vehicles = Arrays.asList(
            new VehicleDto(1L, "Ford", "Mondeo", "Blue", 1999),
            new VehicleDto(1L, "Citroen", "C3", "White", 2010)
    );


    @Override
    public List<VehicleDto> all() {
        return vehicles;
    }

    @Override
    public VehicleDto byId(Long id) {
        return vehicles.stream().filter(vehicle -> id.equals(vehicle.getId()))
                .findFirst()
                .orElseThrow(() -> new AppException("Vehicle not found", HttpStatus.NOT_FOUND));
    }
}
