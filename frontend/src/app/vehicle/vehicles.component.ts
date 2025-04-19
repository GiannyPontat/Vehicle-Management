import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {VehicleDto} from "./vehicles.dto";
import {MatIconModule} from "@angular/material/icon";
import {VehicleService} from "./vehicle.service";
import {MatTableModule} from "@angular/material/table";
import {AddComponent} from "./add/add.component";
import {DialogRef} from "@angular/cdk/dialog";
import {MatDialog} from "@angular/material/dialog";
import {VehiclePreviewDialogComponent} from "../vehicle-preview-dialog/vehicle-preview-dialog.component";
import {ImgGenerateService} from "../services/img-generate.service";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTableModule]
})
export class VehiclesComponent {

  @Input() vehicles: VehicleDto[] = []
  displayedColumns: string[] = ['brand', 'model', 'year', 'color', 'actions'];


  constructor(private imgService: ImgGenerateService, private dialog: MatDialog, private service: VehicleService) {
  }

  onEdit(vehicle: VehicleDto) {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '400px',
      data: {mode: 'edit', vehicle: vehicle}
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.putUpdate(result)
      }
    })
  }

  onDelete(vehicle: VehicleDto) {
    this.service.delete(vehicle)
  }

  openVehiclePreview(vehicle: any): void {
    const prompt = `A zoomed out front view of a ${vehicle.color} ${vehicle.brand} ${vehicle.model}`

    this.imgService.getVehicleImage(prompt).subscribe(imageUrl => {
      this.dialog.open(VehiclePreviewDialogComponent, {
        width: '500px',
        data: {
          imageUrl,
          description: prompt
        }
      })
    })
  }
}
