import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigService } from './app.config';

// Auth
import { AuthModule } from './auth/auth.module';

// Shared/Widget
import { SharedModule } from './shared/shared.module';

// Feature Modules
//import { ItemModule } from './items/shared/item.module';
import { UploadsModule } from './uploads/uploads.module';
import { UiModule } from './ui/shared/ui.module';
import { NotesModule } from './notes/notes.module';

// Theme, Header, Footer
import { ThemeModule } from './theme/theme.module';


import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    UploadsModule,
    //ItemModule,
    UiModule,
    NotesModule,
    ThemeModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [
    AppConfigService,
  ]
})
export class AppModule { }
