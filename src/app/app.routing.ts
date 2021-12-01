import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';


export const AppRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full',
  
    }, {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
        ]
    }, {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }
        ]
    }
];