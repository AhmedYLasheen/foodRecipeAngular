import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.scss']
})
export class AddEditCategoryComponent {
  name:string='';
  readonly dialogRef = inject(MatDialogRef<AddEditCategoryComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
