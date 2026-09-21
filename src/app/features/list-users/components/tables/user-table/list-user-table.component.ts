import { Component, inject, OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from "@angular/material/button"
import { User } from "../../../../../shared/models/User.model"
import { HttpClient } from "@angular/common/http"
import {MatTableDataSource} from "@angular/material/table";
import { EditUserModalComponent } from "../../../../edit-user/components/edit-user-modal/edit-user-modal.component"

@Component({
    selector: 'app-list-user-table',
    imports: [CommonModule, EditUserModalComponent, MatTableModule, MatButtonModule],
    templateUrl: './list-user-table.component.html',
    styleUrl: './list-user-table.component.scss',
    standalone: true
})

export class ListUserTableComponent implements OnInit {
    dataSource = new MatTableDataSource<User>()

    ngOnInit(){
        this.fetchUsers()
    }

    private http = inject(HttpClient)

    private fetchUsers() {

        this.http.get<User[]>('http://localhost:3000/user').subscribe({
            next: (response) => {
                console.log('Users fetched successfully:', response);
                this.dataSource.data = response
            },
            error: (error) => {
                console.error('Failed to fetch users:', error);
                alert('Failed to fetch users. Please try again later.');
            }
        });
    }


    editUser(user: User) {
        console.log('Editing user....')
        if (this.dataSource.data.findIndex(u => u.id === user.id) === -1) {
            console.log('User not found')
            alert('User not found')
            return
        }
        console.log('Editing user:', user)

    }

    removeUser(user: User) {
        if (this.dataSource.data.findIndex(u => u.id === user.id) === -1) {
            console.log('User not found')
            alert('User not found')
            return
        }
        this.dataSource.data = this.dataSource.data.filter(u => u.id !== user.id)
    }


}