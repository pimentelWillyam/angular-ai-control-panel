import { Component } from "@angular/core"
import { EditUserFormComponent } from "../edit-user-form/edit-user-form.component";

@Component({
    selector: 'app-edit-user-dialog',
    imports: [EditUserFormComponent],
    templateUrl: './edit-user-dialog.component.html',
    styleUrl: './edit-user-dialog.component.scss',
    standalone: true
})

export class EditUserDialogComponent {

}