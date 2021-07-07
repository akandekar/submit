import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleRoutingModule } from './sample-routing.module';
import { FormDataComponent } from './form-data/form-data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [FormDataComponent],
  imports: [
    CommonModule,
    SampleRoutingModule,FormsModule, ReactiveFormsModule,
    MatSliderModule,MatInputModule,MatButtonModule,
    MatDatepickerModule,MatFormFieldModule,MatSelectModule,
    MatNativeDateModule,MatToolbarModule,MatCheckboxModule,MatIconModule
  ]
})
export class SampleModule { }
