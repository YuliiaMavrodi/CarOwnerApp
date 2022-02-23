import { Component, OnInit } from '@angular/core';
import {Owner} from "../../models/owner.model";
import {OwnerService} from "../../services/owner.service";
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  owners: Owner[] = [];
  displayedColumns: string[] = ['id', 'lastName', 'firstName', 'middleName', 'cars', 'action'];

  constructor(public ownerService: OwnerService) { }

  ngOnInit(): void {
    this.ownerService.getAll().subscribe((data: Owner[])=>{
      this.owners = data;
      console.log('this.owners', this.owners);
    })
  }

  deleteOwner(id:number){
    this.ownerService.delete(id).subscribe(res => {
      this.owners = this.owners.filter(item => item.id !== id);
      console.log('Owner deleted successfully!');
    })
  }

}
