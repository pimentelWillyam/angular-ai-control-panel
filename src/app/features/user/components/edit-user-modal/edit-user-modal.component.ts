import { Component } from "@angular/core"
import { MatButton } from "@angular/material/button"
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog"

@Component({
    selector: 'app-edit-user-modal',
    imports: [MatDialogModule, MatButton],
    templateUrl: './edit-user-modal.component.html',
    styleUrl: './edit-user-modal.component.scss',
    standalone: true
})

export class EditUserModalComponent {
  constructor(public dialogRef: MatDialogRef<EditUserModalComponent>) {}

  close(){
    console.log("Fechar modal")
    this.dialogRef.close()
  }

  save(){
    console.log("Salvar usuário")
    this.dialogRef.close()
  }
}