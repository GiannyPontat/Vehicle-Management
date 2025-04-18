import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {VehicleDto} from "./vehicles.dto";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule]
})
export class VehicleComponent {

  @Input() vehicle: VehicleDto = {} as VehicleDto
}
