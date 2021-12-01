import { Routes } from '@angular/router';
import { RegisterComponent } from 'app/pages/register/register.component';

import { LoginComponent } from './login/login.component';

export const AuthRoutes: Routes = [{
    path: '',
    children: [{
        path: 'login',
        component: LoginComponent
    }]
},   
]