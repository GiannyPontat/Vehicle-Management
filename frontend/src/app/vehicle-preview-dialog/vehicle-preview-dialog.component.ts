import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-vehicle-preview-dialog',
  templateUrl: './vehicle-preview-dialog.component.html',
  styleUrls: ['./vehicle-preview-dialog.component.scss']
})
export class VehiclePreviewDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
