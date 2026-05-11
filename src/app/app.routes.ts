import { Routes } from '@angular/router'
import { UserListPage } from './features/list-users/pages/user-list-page/user-list.page'
import { EditUserPage } from './features/edit-user/pages/edit-user.page'
import { LoginPage } from './features/auth/pages/login.page'

export const routes: Routes = [
    {path: '', title: 'User List', component: UserListPage},
    {path: 'edit-user/:id', title: 'Edit User', component: EditUserPage},
    {path: 'users', title: 'User List', component: UserListPage},

]
