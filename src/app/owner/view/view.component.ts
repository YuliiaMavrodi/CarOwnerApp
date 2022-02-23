import { Component, OnInit } from '@angular/core';
import {Owner} from "../../models/owner.model";
import {OwnerService} from "../../services/owner.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

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
    });

    this.form = new FormGroup({
      lastName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', Validators.required),
      middleName: new FormControl('', Validators.required)
    });
  }


}
