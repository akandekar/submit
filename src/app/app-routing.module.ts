import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SampleModule} from './sample/sample.module';

const routes: Routes = [
  {
    path:'form',
    loadChildren:'./sample/sample.module#SampleModule',
  },
  {
    path:'',
    loadChildren:'./sample/sample.module#SampleModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
