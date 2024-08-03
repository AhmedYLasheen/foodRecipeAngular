import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete/delete.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DeleteComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    DeleteComponent,
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
