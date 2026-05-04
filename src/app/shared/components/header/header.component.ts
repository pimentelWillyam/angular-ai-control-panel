import { Component } from "@angular/core";
import { MatAnchor } from "@angular/material/button";

@Component({
    selector: 'app-header',
    imports: [MatAnchor],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: true
})

export class HeaderComponent {
    logout() {
        console.log('Logout clicked');
    }
}

