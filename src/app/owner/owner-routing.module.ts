import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {ViewComponent} from "./view/view.component";
import {CreateComponent} from "./create/create.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  { path: 'owner', redirectTo: 'owner/index', pathMatch: 'full'},
  { path: 'owner/index', component: IndexComponent },
  { path: 'owner/:ownerId/view', component: ViewComponent },
  { path: 'owner/create', component: CreateComponent },
  { path: 'owner/:ownerId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
