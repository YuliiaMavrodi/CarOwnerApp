import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {OwnerService} from "../../services/owner.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],

})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  constructor( public ownerService: OwnerService,
               private router: Router,
               private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      lastName: ['', [Validators.required]],
      firstName: ['', Validators.required],
      middleName:['', Validators.required],
      cars: this.formBuilder.array([this.newCar()],
        [Validators.required])
    });
  }

  get f(){
    return this.form.controls;
  }

  get cars(): FormArray {
    return this.form.get('cars') as FormArray;
  }

  newCar(): FormGroup {
    return this.formBuilder.group({
      licencePlate: ['', [Validators.required, Validators.pattern(/^[ABCEHIKMOPTX]{2}\d{4}[ABCEHIKMOPTX]{2}$/)]],
      manufacturerName: ['', Validators.required],
      modelName: ['', Validators.required],
      manufacturerYear: ['', [Validators.required, Validators.min(1990), Validators.max(2022)]]
    });
  }

  addCar() {
    this.cars.push(this.newCar())
  }

  removeCar(carIndex: number) {
    this.cars.removeAt(carIndex);
  }

  submit(){
    console.log(this.form.value);
    this.ownerService.create(this.form.value).subscribe((res:any) => {
      console.log('Owner created successfully!');
      this.router.navigateByUrl('owner/index');
    })
  }

}
