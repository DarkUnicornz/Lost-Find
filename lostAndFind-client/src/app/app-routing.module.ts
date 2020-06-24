import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminNewComponent } from './pages/admin-new/admin-new.component';
import { ModNewComponent } from './pages/mod-new/mod-new.component';
import { LostfoundItemComponent } from './components/lostfound-item/lostfound-item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new_admin', component: AdminNewComponent },
  { path: 'new_mod', component: ModNewComponent },
  { path: 'lostfounditem', component: LostfoundItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
