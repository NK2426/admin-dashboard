import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutes } from './auth.routing';

import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AuthRoutes),
        FormsModule
    ],
    declarations: [
        LoginComponent,
    ]
})

export class AuthModule {}
