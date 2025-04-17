package com.gianny.crud.backend.services;


import com.gianny.crud.backend.dtos.VehicleDto;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public interface VehicleService {


    List<VehicleDto> all();

    VehicleDto byId(Long id);

}
