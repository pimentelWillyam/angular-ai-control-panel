import { Component } from '@angular/core';
import { UserTableComponent } from '../components/tables/user-table/user-table.component';
import { HeaderComponent } from '../components/header/header.component';


@Component({
  selector: 'dashboard-page',
  imports: [HeaderComponent, UserTableComponent],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
  standalone: true
})
export class DashboardPage {}
