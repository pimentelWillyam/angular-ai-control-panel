import { Component, inject } from "@angular/core";
import { MatAnchor } from "@angular/material/button";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    imports: [MatAnchor],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: true
})

export class HeaderComponent {

    private injectedRouter = inject(Router)

    logout() {
        console.log('Logout clicked');
        this.injectedRouter.navigate(['/']);
    }
}

