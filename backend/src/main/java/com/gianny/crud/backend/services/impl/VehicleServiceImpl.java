package com.gianny.crud.backend.services.impl;

import com.gianny.crud.backend.dtos.VehicleDto;
import com.gianny.crud.backend.exceptions.AppException;
import com.gianny.crud.backend.models.VehicleModel;
import com.gianny.crud.backend.repositories.VehicleRepo;
import com.gianny.crud.backend.services.VehicleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Log4j2
@RequiredArgsConstructor
@Service
public class VehicleServiceImpl implements VehicleService {

    private final VehicleRepo repository;


    @Override
    public List<VehicleDto> all() {
        return this.repository.findAll().stream()
                .map(VehicleModel::dto)
                .collect(Collectors.toList());
    }

    @Override
    public VehicleModel byId(Long id) {
        return this.repository.findById(id)
                .orElseThrow(() -> new AppException("Vehicle not found", HttpStatus.NOT_FOUND));
    }

    @Override
    public VehicleModel save(VehicleDto vehicle) {
        return this.repository.saveAndFlush(VehicleModel.builder()
                .brand(vehicle.getBrand())
                .year(vehicle.getYear())
                .color(vehicle.getColor())
                .model(vehicle.getModel())
                .build());
    }

    @Override
    public void delete(Long idVehicle) {
        this.repository.deleteById(idVehicle);
    }

    @Override
    public VehicleModel update(VehicleDto vehicle) {
        VehicleModel model = this.repository.findById(vehicle.getId())
                .orElseThrow(() -> new AppException("Vehicle not found", HttpStatus.NOT_FOUND));

        model.setBrand(vehicle.getBrand());
        model.setModel(vehicle.getModel());
        model.setYear(vehicle.getYear());
        model.setColor(vehicle.getColor());

        return this.repository.save(model);
    }
}
