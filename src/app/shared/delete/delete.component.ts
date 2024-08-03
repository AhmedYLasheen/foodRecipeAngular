import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  id:any='';
  readonly dialogRef = inject(MatDialogRef<DeleteComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteItem() {
    // Add your logic to delete the item here
    this.dialogRef.close(this.data.id);}
}
