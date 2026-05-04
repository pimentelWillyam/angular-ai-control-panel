import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'app-user-table',
    imports: [CommonModule, MatTableModule, MatButtonModule],
    templateUrl: './user-table.component.html',
    styleUrl: './user-table.component.scss',
    standalone: true
})

export class UserTableComponent {
    users = [
        { id: 1, name: 'John Doe', role: 'User', email: "john.doe@example.com" },
        { id: 2, name: 'Jane Smith', role: 'Admin', email: "jane.smith@example.com" }
    ];

    editUser(user: any) {
        console.log('Edit user:', user);
    }

    removeUser(user: any) {
        console.log('Remove user:', user);
    }


}