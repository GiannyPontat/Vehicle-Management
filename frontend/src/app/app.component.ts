import {Component, OnInit} from '@angular/core';
import {VehicleDto} from "./vehicle/vehicles.dto";
import {HttpClient} from "@angular/common/http";
import {API, URLS} from "./const";
import {VehicleService} from "./vehicle/vehicle.service";
import {MatDialog} from "@angular/material/dialog";
import {AddComponent} from "./vehicle/add/add.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  vehicles: VehicleDto[] = []

  constructor(private vehicleService: VehicleService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.vehicleService.getAll()
    this.vehicleService.vehicles$.subscribe(vehicles => this.vehicles = vehicles)
  }

  openAddVehicleDialog(): void {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.vehicleService.postSave(result)
      }
      console.log('The dialog was closed', result);
    });
  }

}
