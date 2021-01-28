import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisitorComponent } from './pages/visitor/visitor.component';
import { VoucherComponent } from './pages/voucher/voucher.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { NavBarMenuComponent } from './shared/components/nav-bar-menu/nav-bar-menu.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/angular-material.module';
@NgModule({
   declarations: [
      AppComponent,
      VisitorComponent,
      VoucherComponent,
      UserComponent,
      LoginComponent,
      NavBarMenuComponent,
      NotFoundComponent,
      ForgotPasswordComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      FlexLayoutModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
