import { Routes } from '@angular/router';
import { PageDefaultComponent } from './page-default/page-default.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'default', component:PageDefaultComponent},
    {path:'', redirectTo:'/login', pathMatch:'full'},
];
