import { Routes } from '@angular/router';
import { LoginComponent } from 'app/auth/login/login.component';

import { RegisterComponent } from './register/register.component';


export const PagesRoutes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path:'login',
        component:LoginComponent
    }
];
