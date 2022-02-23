import { Component, OnInit } from '@angular/core';
import {Owner} from "../../models/owner.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {OwnerService} from "../../services/owner.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  owner!: Owner;
  form!: FormGroup;

  constructor(
    public ownerService: OwnerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['ownerId'];
    this.ownerService.find(this.id).subscribe((data: Owner)=>{
      this.owner = data;
    })

    this.form = new FormGroup({
      lastName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', Validators.required),
      middleName: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log('this.form.value', this.form.value);
    this.ownerService.update(this.form.value).subscribe((res:any) => {
      console.log('Owner updated successfully!');
      this.router.navigateByUrl('owner/index');
    })
  }
}
