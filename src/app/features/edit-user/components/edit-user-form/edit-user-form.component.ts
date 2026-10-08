import { Component, inject, Input, SimpleChanges, OnChanges } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { User } from "../../../../shared/models/User.model";
import { HttpClient } from "@angular/common/http";
import { MatDialogRef } from "@angular/material/dialog";
@Component({
    selector: 'app-edit-user-form',
    imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
],
    templateUrl: './edit-user-form.component.html',
    styleUrl: './edit-user-form.component.scss',
    standalone: true
})

export class EditUserFormComponent implements OnChanges {

    @Input() user!: User

    private formBuilder = inject(FormBuilder)
    userForm = this.formBuilder.group({
        login: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        role: ['', Validators.required]
    })

    private dialogRef = inject(MatDialogRef<User>)

    private http = inject(HttpClient)
    private apiUrl = 'http://localhost:3000/user'



    ngOnChanges(changes: SimpleChanges): void {
        console.log('Changes:', changes)
        if (changes['user'] && changes['user'].currentValue) {
            this.userForm.patchValue({
                login: this.user.login,
                email: this.user.email,
                role: this.user.role
            });
        }
    }

    submit(): void {
    console.log('User:', this.user)
    console.log('caiu no submit')
        if (!this.userForm.valid){
            this.userForm.markAllAsTouched()
            return
        }
        try {
            this.http.patch<User>(`${this.apiUrl}/${this.user.id}`, this.userForm.value).subscribe({
                next: (updatedUser) => {
                    console.log('User updated successfully:', updatedUser);
                    this.dialogRef.close(updatedUser);
                    alert('User updated successfully.');

                },
                error: (error) => {
                    console.error('Failed to update user:', error);
                    alert('Failed to update user. Please try again later.');
                }
            });
        } catch (error) {
            console.error('Unexpected error occurred:', error);
            alert('An unexpected error occurred. Please try again later.');
        }

    }
}