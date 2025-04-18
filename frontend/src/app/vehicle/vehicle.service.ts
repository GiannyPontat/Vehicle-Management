import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VehicleDto} from "./vehicles.dto";
import {API, API_VARS, URLS} from "../const";
import {BehaviorSubject} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicles: BehaviorSubject<VehicleDto[]>

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.vehicles = new BehaviorSubject<VehicleDto[]>({} as VehicleDto[])
  }

  getAll() {
    this.http.get<VehicleDto[]>(API(URLS.vehicles, 'vehicles'))
      .subscribe({
        next: (vehicles: VehicleDto[]) => {
          this.vehicles.next(vehicles)
        },
        error: (error) => {
          console.error(error)
        }
      })
  }

  postSave(vehicle: VehicleDto): void {
    debugger
    this.http.post<VehicleDto>(API(URLS.vehicles, null), vehicle)
      .subscribe({
        next: (newVehicle) => {
          const updatedVehicles = [...this.vehicles.value, newVehicle]
          this.vehicles.next(updatedVehicles)
          this.snackBar.open('Véhicule ajouté avec succès', 'OK')
        },
        error: (error) => {
          console.error(error)
          this.snackBar.open('Une erreur est survenue lors de l\'ajout', 'OK')
        }
      });
  }


}
