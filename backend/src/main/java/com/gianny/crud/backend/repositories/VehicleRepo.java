package com.gianny.crud.backend.repositories;

import com.gianny.crud.backend.models.VehicleModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepo extends JpaRepository <VehicleModel,Long> {
}
