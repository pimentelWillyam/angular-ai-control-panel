import { Component } from '@angular/core';
import { UserTableComponent } from '../components/user-table/user-table.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';


@Component({
  selector: 'app-dashboard-page',
  imports: [HeaderComponent, UserTableComponent],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss',
  standalone: true
})
export class DashboardPage {}
