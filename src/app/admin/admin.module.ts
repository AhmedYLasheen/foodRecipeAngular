import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AddEditCategoryComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    SharedModule,
    

  ],
  exports: [
   
    FormsModule,
    MatSelectModule,
    SharedModule
  ]
})
export class AdminModule { }