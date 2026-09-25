import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource } from "@angular/material/table";

import { User } from "../../../../../shared/models/User.model";
import { EditUserDialogComponent } from "../../../../edit-user/components/edit-user-modal/edit-user-dialog.component";

@Component({
    selector: 'app-list-user-table',
    standalone: true,
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule
    ],
    templateUrl: './list-user-table.component.html',
    styleUrl: './list-user-table.component.scss',
})
export class ListUserTableComponent implements OnInit {

    dataSource = new MatTableDataSource<User>();

    private http = inject(HttpClient);
    private dialog = inject(MatDialog);

    ngOnInit() {
        this.fetchUsers();
    }

    private fetchUsers() {
        this.http.get<User[]>('http://localhost:3000/user').subscribe({
            next: (response) => {
                console.log('Users fetched successfully:', response);
                this.dataSource.data = response;
            },
            error: (error) => {
                console.error('Failed to fetch users:', error);
                alert('Failed to fetch users. Please try again later.');
            }
        });
    }

    editUser(user: User) {
        const userExists = this.dataSource.data.some(
            u => u.id === user.id
        );

        if (!userExists) {
            console.log('User not found');
            alert('User not found');
            return;
        }

        const dialogRef = this.dialog.open(EditUserDialogComponent, {
            width: '500px',
            data: user
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log('Dialog result:', result);

                this.dataSource.data = this.dataSource.data.map(u =>
                    u.id === result.id ? result : u
                );
            }
        });
    }

    removeUser(user: User) {
        const userExists = this.dataSource.data.some(
            u => u.id === user.id
        );

        if (!userExists) {
            console.log('User not found');
            alert('User not found');
            return;
        }

        this.dataSource.data = this.dataSource.data.filter(
            u => u.id !== user.id
        );
    }
}