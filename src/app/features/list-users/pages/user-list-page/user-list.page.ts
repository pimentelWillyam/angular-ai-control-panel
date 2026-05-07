import { Component } from '@angular/core'
import { ListUserTableComponent } from '../../components/tables/user-table/list-user-table.component'
import { HeaderComponent } from '../../../../shared/components/header/header.component'


@Component({
  selector: 'app-user-list',
  imports: [HeaderComponent, ListUserTableComponent],
  templateUrl: './user-list.page.html',
  styleUrl: './user-list.page.scss',
  standalone: true
})
export class UserListPage {
}
