import { Component, inject } from "@angular/core"
import { EditUserFormComponent } from "../edit-user-form/edit-user-form.component";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { User } from "../../../../shared/models/User.model";

@Component({
    selector: 'app-edit-user-dialog',
    imports: [EditUserFormComponent],
    templateUrl: './edit-user-dialog.component.html',
    styleUrl: './edit-user-dialog.component.scss',
    standalone: true
})

export class EditUserDialogComponent {

    user = inject<User>(MAT_DIALOG_DATA);

    

}