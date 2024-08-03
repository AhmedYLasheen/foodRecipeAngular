import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HelperService } from 'src/app/admin/services/helper.service';
import { RecipeService } from 'src/app/admin/services/Recipe.service';
import { DashboardService } from '../../../../services/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-recipe',
  templateUrl: './add-edit-recipe.component.html',
  styleUrls: ['./add-edit-recipe.component.scss']
})
export class AddEditRecipeComponent {
  tag: any[] = [];
  categories: any[] = [];
  tagId: number = 0;
  categoriesId: number = 0;
  imgSrc:any;
  recipeId:number=0;

recipeForm =new FormGroup({
  name: new FormControl(null),
  description : new FormControl(null),
  price : new FormControl(null),
  tagId : new FormControl(null),
  recipeImage: new FormControl(null),
  categoriesIds: new FormControl(null),
})

constructor(private router:Router,private _ActivatedRoute:ActivatedRoute,private _HelperService: HelperService, private _RecipeService: RecipeService, private _DashboardService: DashboardService, public dialog: MatDialog) {

  console.log(_ActivatedRoute.snapshot.params['id']);
  this.recipeId=_ActivatedRoute.snapshot.params['id'];
}
ngOnInit(): void {
  this.getAllTags()
  this.getAllCategory()
  if (this.recipeId > 0) {
    this.getRecipeById(this.recipeId)
  }
}

getAllTags() {
  this._HelperService.getTags().subscribe({
    next: (res) => {
      // console.log(res);
      this.tag = res;


    }
  })
}

getAllCategory() {
  this._DashboardService.getAllCategories(100,1,'').subscribe({
    next: (res) => {
      console.log(res);
      this.categories = res.data;


    }
  })
}

files: File[] = [];


onSelect(event: any) {
  console.log(event);
  this.files.push(...event.addedFiles);
  this.imgSrc = event.addedFiles[0]; // Ensure it's a File object
  console.log(this.imgSrc);
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

onSubmit(data:FormGroup){
  console.log(data.value);
  data.value.id=this.recipeId;
  let myData=new FormData();
  
  myData.append('name',data.value.name);
  myData.append('description',data.value.description );
  myData.append('price',data.value.price );
  myData.append('tagId',data.value.tagId );
  myData.append('categoriesIds',data.value.categoriesIds );
  myData.append('recipeImage',this.imgSrc);


  if (this.recipeId) {
    myData.append('id',data.value.id);
    this._RecipeService.onEditRecipe(this.recipeId ,myData).subscribe({
      next:(res)=>{
        console.log(res);
        
      },error:()=>{
  
      },complete:()=>{
        this.router.navigate(['/admin/recipes'])
      }
    })
  }else{
    this._RecipeService.onAdddRecipe( myData).subscribe({
      next:(res)=>{
        console.log(res);
        
      },error:()=>{
  
      },complete:()=>{
        this.router.navigate(['/admin/recipes'])
      }
    })
  }
 
  }

  recipeData:any;
  getRecipeById(id:number) {
  this._RecipeService.getRecipeById(id).subscribe({
    next: (res) => {
      console.log(res);
      this.recipeData=res;

    },error:()=>{

    },
    complete:()=>{
      this.recipeForm.patchValue({
        name: this.recipeData.name,
        description : this.recipeData.description,
        price : this.recipeData.price,
        tagId : this.recipeData.tag.id,
        recipeImage: this.recipeData.recipeImage,
        categoriesIds: this.recipeData.category.map((item:any)=>item.id),
      })
    }
  })
}
}
