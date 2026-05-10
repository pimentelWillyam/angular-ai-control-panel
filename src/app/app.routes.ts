import { Routes } from '@angular/router'
import { UserListPage } from './features/list-users/pages/user-list-page/user-list.page'
import { LoginPage } from './features/auth/pages/login.page'

export const routes: Routes = [
    {path: '', title: 'Login', component: LoginPage},
    {path: 'users', title: 'User List', component: UserListPage},
]
