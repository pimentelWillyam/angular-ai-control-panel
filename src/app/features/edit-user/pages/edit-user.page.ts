import { Component, inject, OnInit } from "@angular/core";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { EditUserTableComponent } from "../components/edit-user-table/edit-user-table.component";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-edit-user',
    imports: [HeaderComponent, EditUserTableComponent],
    templateUrl: 'edit-user.page.html',
    styleUrl: 'edit-user.page.scss',
    standalone: true
})
export class EditUserPage implements OnInit {
    userName: string
    private route = inject(ActivatedRoute)
    constructor(){
    this.userName = this.route.snapshot.paramMap.get('id')?.toString() || 'Unknown User';

    }

    ngOnInit(){
        console.log('hello')
        const id = this.route.snapshot.paramMap.get('id');
        console.log('id', id)
    }
}

