import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../../shared/shared.module';

// import Theme Module
import { ThemeModule } from '../../theme/theme.module';

//import { NavService } from './nav.service';

import { UserLoginComponent } from '../user-login/user-login.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserFormComponent } from '../user-form/user-form.component';

// TODO: Theme Module
// import { HeaderComponent } from '../../theme/header/header.component';
// import { FooterComponent } from '../../theme/footer/footer.component';

import { NotificationMessageComponent } from '../notification-message/notification-message.component';

// Pages
import { HomeComponent } from '../../pages/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    UserLoginComponent,
    UserProfileComponent,
    //HeaderComponent,
    //FooterComponent,
    UserFormComponent,
    HomeComponent,
    NotificationMessageComponent,
  ],
  exports: [
    //HeaderComponent,
    //FooterComponent,
    UserProfileComponent,
    NotificationMessageComponent,
  ],
})
export class UiModule { }
