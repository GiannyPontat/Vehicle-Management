import {Component, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {VehicleService} from "../vehicle.service";
import {VehicleDto} from "../vehicles.dto";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, NgIf, ReactiveFormsModule, MatDialogModule]
})
export class AddComponent implements OnInit {
  vehicleForm!: FormGroup
  mode: 'add' | 'edit' = 'add'
  vehicleData: VehicleDto = {} as VehicleDto

  @ViewChild("vehicleForm") vehicle!: NgForm;
  @Output() newDataEvent = new EventEmitter()

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: VehicleService, private fb: FormBuilder, private dialogRef: MatDialogRef<AddComponent>) {
    this.mode = this.data.mode
  }


  ngOnInit(): void {
    this.vehicleData = this.data.vehicle
    this.vehicleForm = this.fb.group({
      brand: [this.vehicleData ? this.vehicleData.brand : '', Validators.required],
      model: [this.vehicleData ? this.vehicleData.model : '', Validators.required],
      year: [this.vehicleData ? this.vehicleData.year : new Date().getFullYear(), [Validators.required, Validators.min(1950), Validators.max(2030)]],
      color: [this.vehicleData ? this.vehicleData.color : '', Validators.required]
    })
  }

  onSubmit(): void {
    if (this.vehicleForm.valid) {
      const vehicle = this.vehicleForm.value
      if (this.vehicleData && this.vehicleData.id) vehicle.id = this.vehicleData.id
      this.dialogRef.close(vehicle)
    } else {
      this.vehicleForm.markAllAsTouched()
    }
  }
}
