import { Component, inject } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
@Component({
    selector: 'app-edit-user-form',
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
    ],
    templateUrl: './edit-user-form.component.html',
    styleUrl: './edit-user-form.component.scss',
    standalone: true
})

export class EditUserFormComponent {
    private formBuilder = inject(FormBuilder)
    userForm = this.formBuilder.group({
        login: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        role: ['', Validators.required]
    })

    submit(): void {
        if (this.userForm.valid){
            this.userForm.markAllAsTouched()
            return
        }
    }
}