package com.gianny.crud.backend.models;

import com.gianny.crud.backend.dtos.VehicleDto;
import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "gp_crud_vehicle")
public class VehicleModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String brand;
    private String model;
    private String color;
    private int year;


    public VehicleDto dto() {
        return new VehicleDto(
                this.id,
                this.brand,
                this.model,
                this.color,
                this.year);
    }

}
