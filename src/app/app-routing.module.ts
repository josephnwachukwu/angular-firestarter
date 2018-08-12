import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { UserLoginComponent } from './ui/user-login/user-login.component';
//import { ItemsListComponent } from './items/items-list/items-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { UploadPageComponent } from './uploads/upload-page/upload-page.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'login', component: UserLoginComponent },
  //{ path: 'items', component: ItemsListComponent, canActivate: [AuthGuard] },
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  // uploads are lazy loaded
  { path: 'uploads', component: UploadPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
