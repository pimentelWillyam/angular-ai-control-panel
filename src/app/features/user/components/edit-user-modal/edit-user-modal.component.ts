import { Component, Inject } from "@angular/core"
import { MatButton } from "@angular/material/button"
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog"
import { User } from "../../models/User.model"

@Component({
    selector: 'app-edit-user-modal',
    imports: [MatDialogModule, MatButton],
    templateUrl: './edit-user-modal.component.html',
    styleUrl: './edit-user-modal.component.scss',
    standalone: true
})

export class EditUserModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EditUserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {}

  close() {
    this.dialogRef.close()
  }

  save() {
    this.dialogRef.close(this.user)
  }
}