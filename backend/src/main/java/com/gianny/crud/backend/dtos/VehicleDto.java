package com.gianny.crud.backend.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;


@AllArgsConstructor
@Builder
@Data
public class VehicleDto {

  private Long id;
  @NotNull
  private String brand;
  @NotNull
  private String model;
  @NotNull
  private String color;
  private int year;
}
