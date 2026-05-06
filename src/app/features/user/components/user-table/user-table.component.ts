import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from "@angular/material/button"
import { MatDialog } from "@angular/material/dialog"
import { EditUserModalComponent } from "../edit-user-modal/edit-user-modal.component"

@Component({
    selector: 'app-user-table',
    imports: [CommonModule, MatTableModule, MatButtonModule],
    templateUrl: './user-table.component.html',
    styleUrl: './user-table.component.scss',
    standalone: true
})

export class UserTableComponent {
    constructor(private readonly dialog: MatDialog) {}

    private openEditUserModal(user: any) {
        console.log('Open edit user modal for:', user)
        this.dialog.open(EditUserModalComponent, {
            minWidth: '200px',
            minHeight: '100px',
        })
    }
    users = [
        { id: 1, name: 'John Doe', role: 'User', email: "john.doe@example.com" },
        { id: 2, name: 'Jane Smith', role: 'Admin', email: "jane.smith@example.com" }
    ]

    editUser(user: any) {
        console.log('Edit user:', user)
        this.openEditUserModal(user)
    }

    removeUser(user: any) {
        console.log('Remove user:', user)
    }


}