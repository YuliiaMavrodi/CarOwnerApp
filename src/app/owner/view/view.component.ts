import {Component, OnInit} from '@angular/core';
import {Owner} from "../../models/owner.model";
import {OwnerService} from "../../services/owner.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

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
    });


    this.form = this.formBuilder.group({
      lastName: ['', [Validators.required]],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      cars: this.formBuilder.array([],
        [Validators.required])
    });
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

  addFormGroups(count: number) {
    this.propArray = this.form.get('cars') as FormArray;
    for (let i = 0; i < count; i++) {
      this.propArray.push(this.newCar());
    }
  }

}
