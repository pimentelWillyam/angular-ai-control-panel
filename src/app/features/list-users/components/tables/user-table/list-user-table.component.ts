import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from "@angular/material/button"
import { User } from "../../../../../shared/models/User.model"

@Component({
    selector: 'app-list-user-table',
    imports: [CommonModule, MatTableModule, MatButtonModule],
    templateUrl: './list-user-table.component.html',
    styleUrl: './list-user-table.component.scss',
    standalone: true
})

export class ListUserTableComponent {
    users: User[] = [
        { id: "1", login: 'John Doe', createdAt: new Date('2023-01-02'), password: '123', updatedAt: new Date('2023-01-02'), email: "john.doe@example.com" },
        { id: "2", login: 'Jane Smith', createdAt: new Date('2023-01-02'), password: '456', updatedAt: new Date('2023-01-02'), email: "jane.smith@example.com" }
    ]

    editUser(user: User) {
        console.log('Edit user:', user)
    }

    removeUser(user: User) {
        console.log('Remove user:', user)
    }


}