import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }   from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutes } from './app.routing';
// import { StudentComponent } from './student/student.component';


@NgModule({
    imports: [                     
        RouterModule.forRoot(AppRoutes,{
            useHash: true
        }),
        BrowserAnimationsModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        SidebarModule,
        NavbarModule,
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        LoginComponent,

    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }