
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserRemover {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = 'http://localhost:3000/user';

    execute(userId: string): void {
        this.http.delete(`${this.apiUrl}/${userId}`).subscribe({
            next: () => {
                console.log('User removed successfully.');
                alert('User removed successfully.');
            },
            error: (error) => {
                console.error('Failed to remove user:', error);
                alert('Failed to remove user. Please try again later.');
            }
        });
    }
}