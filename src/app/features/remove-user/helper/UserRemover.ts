import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

export class UserRemover {
    execute(userId: string): void {
        const apiUrl = 'http://localhost:3000/user';
        const http = inject(HttpClient);
        http.delete(`${apiUrl}/${userId}`).subscribe({
            next: () => {
                console.log('User removed successfully.');
                alert('User removed successfully.');
            },
            error: (error) => {
                console.error('Failed to remove user:', error);
                alert('Failed to remove user. Please try again later.');
            }
        })
    }
}