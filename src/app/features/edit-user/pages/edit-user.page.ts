import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { EditUserTableComponent } from "../components/edit-user-table/edit-user-table.component";
import { routes } from "../../../app.routes";

@Component({
    selector: 'app-edit-user',
    imports: [HeaderComponent, EditUserTableComponent],
    templateUrl: 'edit-user.page.html',
    styleUrl: 'edit-user.page.scss',
    standalone: true
})
export class EditUserPage implements OnInit {
    userName: string
    constructor(){
    this.userName = 'aaa'

    }

    ngOnInit(){
        console.log('hello')
        this.route.paraMap.subscribe(params => {
            const id = params.get('id')
        })
    }
}

