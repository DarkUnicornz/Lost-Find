import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminNewComponent } from './pages/admin-new/admin-new.component';
import { ModNewComponent } from './pages/mod-new/mod-new.component';
import { LostfoundItemComponent } from './components/lostfound-item/lostfound-item.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ModDashboardComponent } from './pages/mod-dashboard/mod-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { TestComponent } from './test/test/test.component';


import { ModEntryComponent } from './pages/mod-entry/mod-entry.component';
import { ModEntryNextComponent } from './pages/mod-entry-next/mod-entry-next.component';
import { ModProfileComponent } from './pages/mod-profile/mod-profile.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new_admin', component: AdminNewComponent },
  { path: 'new_mod', component: ModNewComponent },
  { path: 'lostfounditem', component: LostfoundItemComponent },
  { path: 'user_dashboard', component: UserDashboardComponent},
  { path: 'mod_dashboard', component: ModDashboardComponent},
  { path: 'admin_dashboard', component: AdminDashboardComponent},
  { path: 'test', component: TestComponent },
  { path: 'mod_profile',component:ModProfileComponent},
  { path: 'mod_entry', component:ModEntryComponent},
  { path: 'mod_entry_next', component:ModEntryNextComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
