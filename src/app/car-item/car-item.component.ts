import {Component, OnInit} from '@angular/core';
import {
  ControlContainer, FormArray,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
  ownerFormGroup!: FormGroup;
  carsFormArray!: FormArray;


  constructor(private fb: FormBuilder, private ownerControl: ControlContainer) {
  }

  ngOnInit(): void {
    this.ownerFormGroup = this.ownerControl.control as FormGroup;
    this.carsFormArray = this.fb.array([
      this.fb.group({
        licencePlate: ['', [Validators.required]],
        manufacturerName: ['', Validators.required],
        modelName: ['', Validators.required],
        manufacturerYear: ['', Validators.required]
      })
  ]);
    // this.ownerFormGroup.addControl('cars', this.carsFormArray)
  }

  // get f() {
  //   return this.carsFormArray.controls;
  // }

  get f() {
    return this.carsFormArray as FormArray;
  }

  addCar() {
    this.f.push(this.fb.group({
      licencePlate: ['', [Validators.required]],
      manufacturerName: ['', Validators.required],
      modelName: ['', Validators.required],
      manufacturerYear: ['', Validators.required]
    }));
  }


}
