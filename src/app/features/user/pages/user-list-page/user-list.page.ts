import { Component } from '@angular/core'
import { UserTableComponent } from '../../components/tables/user-table/user-table.component'
import { HeaderComponent } from '../../../../shared/components/header/header.component'


@Component({
  selector: 'app-user-list',
  imports: [HeaderComponent, UserTableComponent],
  templateUrl: './user-list.page.html',
  styleUrl: './user-list.page.scss',
  standalone: true
})
export class UserListPage {
}
