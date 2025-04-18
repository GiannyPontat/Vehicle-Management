import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {VehicleService} from "../vehicle.service";
import {VehicleDto} from "../vehicles.dto";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, NgIf, ReactiveFormsModule, MatDialogModule]
})
export class AddComponent implements OnInit {
  vehicleForm!: FormGroup;

  @ViewChild("vehicleForm") vehicle!: NgForm;
  @Output() newDataEvent = new EventEmitter();

  constructor(private service: VehicleService, private fb: FormBuilder, private dialogRef: MatDialogRef<AddComponent>) {
  }


  ngOnInit(): void {
    this.vehicleForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: [new Date().getFullYear(), [Validators.required, Validators.min(1950), Validators.max(2030)]],
      color: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.vehicleForm.valid) {
      const vehicle = this.vehicleForm.value
      this.service.postSave(vehicle)
      console.log('🚗 Vehicle submitted:', vehicle)
      this.dialogRef.close(this.vehicle)
    } else {
      this.vehicleForm.markAllAsTouched()
    }
  }
}
