import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormDataComponent} from './form-data/form-data.component';

const routes: Routes = [
  {
    path:'',
    component:FormDataComponent,
  },
  {
    path:'form',
    component:FormDataComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
