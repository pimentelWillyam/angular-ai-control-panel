import { Component } from "@angular/core"
import { User } from "../../../../shared/models/User.model"

@Component({
    selector: 'app-edit-user-modal',
    imports: [],
    templateUrl: './edit-user-modal.component.html',
    styleUrl: './edit-user-modal.component.scss',
    standalone: true
})

export class EditUserModalComponent {

    private openModal(user: User) {
        console.log('Open modal for user:', user)
    }

    private closeModal() {
        console.log('Close modal')
    }

}