import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    providers: [],
    imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
    ],
    standalone: true
})
export class LoginFormComponent {

    private formBuilder = inject(FormBuilder)
    loginForm = this.formBuilder.group({
        login: ['', [Validators.required]],
        password: ['', [Validators.required]]
     })

     private http = inject(HttpClient)

     private router = inject(Router)

     submit(): void {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched()
            return
        }
        console.log(this.loginForm.value)
        console.log('lidando com login')
        const observable = this.http.post('http://localhost:3000/auth/login', this.loginForm.value)
        console.log('terminou de lidar com login')
        observable.subscribe({
            next: (response) => {
                console.log('Login successful:', response);
                this.router.navigate(['/users'])
            },
            error: (error) => {
                console.error('Login failed:', error);
                alert('Login failed. Please check your credentials and try again.');
            }
        });
    }


}