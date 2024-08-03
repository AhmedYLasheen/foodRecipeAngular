import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
   RecipeComponent,
   AddEditRecipeComponent,

  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgxDropzoneModule
    

    
  ],
  exports: [
    FormsModule,
    MatSelectModule,
    
  ]
})
export class RecipeModule { }