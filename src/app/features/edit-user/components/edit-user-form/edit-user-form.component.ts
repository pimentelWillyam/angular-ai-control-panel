import { Component, inject, Input, SimpleChanges, OnChanges } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import { User } from "../../../../shared/models/User.model";
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
        password: ['', [Validators.required]],
        role: ['', Validators.required]
    })

    ngOnChanges(changes: SimpleChanges): void {
        console.log('Changes:', changes)
        if (changes['user'] && changes['user'].currentValue) {
            this.userForm.patchValue({
                login: this.user.login,
                email: this.user.email,
                password: this.user.password,
                role: this.user.role
            });
        }
    }

    submit(): void {
    console.log('User:', this.user)

        if (this.userForm.valid){
            this.userForm.markAllAsTouched()
            return
        }
        console.log(this.userForm.value)
    }
}