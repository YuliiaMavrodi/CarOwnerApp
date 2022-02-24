import {Component, OnInit} from '@angular/core';
import {Owner} from "../../models/owner.model";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {OwnerService} from "../../services/owner.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Car} from "../../models/car.model";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  owner!: Owner;
  form!: FormGroup;
  propArray!: any

  constructor(
    public ownerService: OwnerService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['ownerId'];
    this.ownerService.find(this.id).subscribe((data: Owner) => {
      this.owner = data;
      // @ts-ignore
      this.addFormGroups(this.owner.cars.length);
    })

    this.form = this.formBuilder.group({
      lastName: ['', [Validators.required]],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      cars: this.formBuilder.array([],
        [Validators.required])
    });

  }

  addFormGroups(count: number) {
    this.propArray = this.form.get('cars') as FormArray;
    for (let i = 0; i < count; i++) {
      this.propArray.push(this.newCar());
    }
  }

  get f() {
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

  private createCarItems(count: number): FormGroup[] {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(this.newCar());
    }
    return arr;
  }

  addCar() {
    this.cars.push(this.newCar())
  }

  removeCar(carIndex: number) {
    this.cars.removeAt(carIndex);
  }


  submit() {
    console.log('this.form.value', this.form.value);
    this.ownerService.update(this.form.value).subscribe((res: any) => {
      console.log('Owner updated successfully!');
      this.router.navigateByUrl('owner/index');
    })
  }
}
