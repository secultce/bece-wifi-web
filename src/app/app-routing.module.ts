import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserComponent } from './pages/user/user.component';
import { VisitorComponent } from './pages/visitor/visitor.component';
import { VoucherComponent } from './pages/voucher/voucher.component';

const routes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
   { path: 'forgot-password', component: ForgotPasswordComponent },
   { path: 'users', component: UserComponent },
   { path: 'visitors', component: VisitorComponent },
   { path: 'vouchers', component: VoucherComponent },
   { path: '**', component: NotFoundComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
