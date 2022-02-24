import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OwnerRoutingModule} from './owner-routing.module';
import {IndexComponent} from './index/index.component';
import {ViewComponent} from './view/view.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../material.module";


@NgModule({
  declarations: [
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class OwnerModule {
}
