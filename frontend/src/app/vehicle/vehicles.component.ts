import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {VehicleDto} from "./vehicles.dto";
import {MatIconModule} from "@angular/material/icon";
import {VehicleService} from "./vehicle.service";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule]
})
export class VehiclesComponent {

  @Input() vehicle: VehicleDto = {} as VehicleDto

  constructor(private service: VehicleService) {
  }

  onEdit(vehicle: VehicleDto) {
    this.service.putUpdate(vehicle)
  }

  onDelete(vehicle: VehicleDto) {
    this.service.delete(vehicle)
  }
}
