import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelperService } from '../../services/helper.service';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';
import { RecipeService } from 'src/app/admin/services/Recipe.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  tableDta: any[] = [];
  tag: any[] = [];
  tagId: number = 0;
  tableResponse: any;
  length = 50;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15, 25, 50, 100];
  pageEvent: any;
  searshKey: string = '';
  imagePath: string = 'https://upskilling-egypt.com:3006/';
  dummyImage: string = '../../../../assets/images/1.png';
  disableSelect: any;
 

  constructor(private _HelperService: HelperService, private _RecipeService: RecipeService, public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.getRecipes();
    this.getAllTags()
  }
  getRecipes() {
    let paramsApi = {
      pageSize: this.pageSize,
      pageNumber: this.pageIndex + 1,
      name: this.searshKey,
      tagId: this.tagId
    }
    this._RecipeService.getAllRecipe(paramsApi).subscribe({
      next: (res) => {
        // console.log(this.tagId);
        this.tableResponse = res;
        this.tableDta = res.data;

      }
    })

  }


  deleteRecipe(id:number){
    this._RecipeService.onDeleteRecipe(id).subscribe({
      next:(res)=>{
        console.log(res);
        
      },error:()=>{
  
      },complete:()=>{
        this.getRecipes()
      }
    })
  }


  openDeleteRecipeDialog(   recipeData:any){
    console.log(recipeData);
    
       const dialogRef = this.dialog.open(DeleteComponent, {
         data:recipeData,
       });
   
       dialogRef.afterClosed().subscribe(result => {
         // console.log('The dialog was closed');
        console.log(result);
        if (result) {
         this.deleteRecipe(result)
        }
        
       });
     
   }

  handlePageEvent(e: any) {
    console.log(e);

    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getRecipes()
  }




  getAllTags() {
    this._HelperService.getTags().subscribe({
      next: (res) => {
        // console.log(res);
        this.tag = res;


      }
    })
  }

}