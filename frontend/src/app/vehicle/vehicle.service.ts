import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VehicleDto} from "./vehicles.dto";
import {API, API_VARS, URLS} from "../const";
import {BehaviorSubject} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {IdsService} from "../services/ids.service";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicles$: BehaviorSubject<VehicleDto[]>

  constructor(private http: HttpClient, private snackBar: MatSnackBar,private ids : IdsService) {
    this.vehicles$ = new BehaviorSubject<VehicleDto[]>({} as VehicleDto[])
  }

  getAll() {
    this.http.get<VehicleDto[]>(API(URLS.vehicles, 'vehicles'))
      .subscribe({
        next: (vehicles: VehicleDto[]) => {
          this.vehicles$.next(vehicles)
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
          const updatedVehicles = [...this.vehicles$.value, newVehicle]
          this.vehicles$.next(updatedVehicles)
          this.snackBar.open('Véhicule ajouté avec succès', 'OK')
        },
        error: (error) => {
          console.error(error)
          this.snackBar.open('Une erreur est survenue lors de l\'ajout', 'OK')
        }
      });
  }

  putUpdate(vehicle: VehicleDto): void {
    this.http.put<VehicleDto>(API_VARS(URLS.vehicles, 'id', vehicle.id), vehicle)
      .subscribe({
        next: () => {
          this.snackBar.open(`Update terminé`, 'OK')
        },
        error: (error) => {
          console.error(error)
        }
      })

  }

  delete(vehicle: VehicleDto): void {
    debugger
    this.ids.set('idVehicle',vehicle.id)
    this.http.delete(API_VARS(URLS.vehicles, 'id', this.ids))
      .subscribe({
        next: () => {
          this.vehicles$.next([])
          this.getAll()
          this.snackBar.open(`Vehicule supprimé`, 'OK')
        },
        error: (error) => {
          console.error(error)
        }
      })

  }


}
