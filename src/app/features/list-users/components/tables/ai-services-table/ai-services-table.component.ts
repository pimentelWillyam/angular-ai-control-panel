import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from "@angular/material/button"
import { User } from "../../../../../shared/models/User.model"

@Component({
    selector: 'app-ai-services-table',
    imports: [CommonModule, MatTableModule, MatButtonModule],
    templateUrl: './ai-services-table.component.html',
    styleUrl: './ai-services-table.component.scss',
    standalone: true
})

export class AiServicesTableComponent {

    private openEditUserModal(user: User) {
        console.log('Open edit user modal for:', user)

    }
    aiServices = [
        { id: 1, name: 'John Doe', role: 'User', email: "john.doe@example.com" },
        { id: 2, name: 'Jane Smith', role: 'Admin', email: "jane.smith@example.com" }
    ]

    editUser(user: User) {
        console.log('Edit user:', user)
        this.openEditUserModal(user)
    }

    removeUser(user: User) {
        console.log('Remove user:', user)
    }


}