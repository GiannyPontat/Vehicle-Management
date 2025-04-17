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
    public ResponseEntity<VehicleDto> save(VehicleDto vehicle) {
        return null;
    }
}
