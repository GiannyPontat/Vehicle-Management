import {Component, OnInit} from '@angular/core';
import {VehicleDto} from "./vehicle/vehicles.dto";
import {HttpClient} from "@angular/common/http";
import {API, URLS} from "./const";
import {VehicleService} from "./vehicle/vehicle.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  vehicles: VehicleDto[] = []

  constructor(private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.vehicleService.getAll()
    this.vehicleService.vehicles$.subscribe(vehicles => this.vehicles = vehicles)
  }

}
