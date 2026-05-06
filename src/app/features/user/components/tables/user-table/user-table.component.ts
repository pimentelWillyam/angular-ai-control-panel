import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from "@angular/material/button"
import { MatDialog } from "@angular/material/dialog"
import { EditUserModalComponent } from "../../edit-user-modal/edit-user-modal.component"
import { User } from "../../../models/User.model"

@Component({
    selector: 'app-user-table',
    imports: [CommonModule, MatTableModule, MatButtonModule],
    templateUrl: './user-table.component.html',
    styleUrl: './user-table.component.scss',
    standalone: true
})

export class UserTableComponent {
    constructor(private readonly dialog: MatDialog) {}

    private openEditUserModal(user: User) {
        console.log('Open edit user modal for:', user)
        this.dialog.open(EditUserModalComponent, {
            minWidth: '50%',
            minHeight: '50%',
            data: user,
        })
    }
    users: User[] = [
        { id: "1", login: 'John Doe', createdAt: new Date('2023-01-02'), password: '123', updatedAt: new Date('2023-01-02'), email: "john.doe@example.com" },
        { id: "2", login: 'Jane Smith', createdAt: new Date('2023-01-02'), password: '456', updatedAt: new Date('2023-01-02'), email: "jane.smith@example.com" }
    ]

    editUser(user: User) {
        console.log('Edit user:', user)
        this.openEditUserModal(user)
    }

    removeUser(user: User) {
        console.log('Remove user:', user)
    }


}