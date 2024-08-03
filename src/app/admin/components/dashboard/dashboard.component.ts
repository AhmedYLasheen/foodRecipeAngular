import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { AddEditCategoryComponent } from '../add-edit-category/add-edit-category.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/delete/delete.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
tableDta:any[]=[];
tableResponse :any;
length = 50;
pageSize = 5;
pageIndex = 0;
pageSizeOptions = [5, 10,15, 25,50,100];
pageEvent:any;
searshKey:string='';
  constructor(private _DashboardService:DashboardService,public dialog: MatDialog ){

}
ngOnInit(): void {
    this.getCategories()
}
getCategories(){
  this._DashboardService.getAllCategories(this.pageSize,this.pageIndex+1,this.searshKey).subscribe({
    next:(res)=>{
      // console.log(res);
      this.tableResponse=res;
      this.tableDta=res.data;
      
    }
  })

}

addCategory(categoryName:string){
  this._DashboardService.onAddCategories(categoryName).subscribe({
    next:(res)=>{
      console.log(res);
      
    },error:()=>{

    },complete:()=>{
      this.getCategories()
    }
  })
}

editCategory(categoryItem:any){
  this._DashboardService.onEditCategories(categoryItem).subscribe({
    next:(res)=>{
      console.log(res);
      
    },error:()=>{

    },complete:()=>{
      this.getCategories()
    }
  })
}

deleteCategory(categoryId:number){
  this._DashboardService.onDeleteCategories(categoryId).subscribe({
    next:(res)=>{
      console.log(res);
      
    },error:()=>{

    },complete:()=>{
      this.getCategories()
    }
  })
}

handlePageEvent(e: any) {
  console.log(e);
  
  this.pageEvent = e;
  this.length = e.length;
  this.pageSize = e.pageSize;
  this.pageIndex = e.pageIndex;
  this.getCategories()
}

openAddCategoryDialog(){
 
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      data: {name:'' },
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
     console.log(result);
     if (result) {
      this.addCategory(result.name)
     }
     
    });
  
}

openEditCategoryDialog(categoryData:any){
 console.log(categoryData);
 
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      data:categoryData,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
     console.log(result);
     if (result) {
      this.editCategory(result)
     }
     
    });
  
}
openDeleteCategoryDialog(categoryData:any){
 console.log(categoryData);
 
    const dialogRef = this.dialog.open(DeleteComponent, {
      data:categoryData,
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
     console.log(result);
     if (result) {
      this.deleteCategory(result)
     }
     
    });
  
}

}

