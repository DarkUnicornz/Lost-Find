import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';  // multi language
import {TranslateHttpLoader} from '@ngx-translate/http-loader';        // multi language
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';      // datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';                       // datepicker

// components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { LostfoundItemComponent } from './components/lostfound-item/lostfound-item.component';
import { AdminNewComponent } from './pages/admin-new/admin-new.component';
import { ModNewComponent } from './pages/mod-new/mod-new.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ModDashboardComponent } from './pages/mod-dashboard/mod-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { TestComponent } from './test/test/test.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { OwnItemsComponent } from './pages/own-items/own-items.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ComplainComponent } from './components/complain/complain.component';
import { LostfoundItemCardComponent } from './components/lostfound-item-card/lostfound-item-card.component';
import { AdminModProfileComponent } from './pages/admin-mod-profile/admin-mod-profile.component';
import { EdituserprofileComponent } from './pages/edituserprofile/edituserprofile.component';

// services
import { AuthenticationService } from './services/authentication.service';
import { ValidateService } from './services/validate.service';
// import { authInterceptorProviders } from './helpers/authentication.interceptor';
import { authInterceptorProviders } from './helpers/authentication.interceptor';

// ngx-bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
<<<<<<< HEAD
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { OwnItemsComponent } from './pages/own-items/own-items.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ComplainComponent } from './pages/complain/complain.component';
=======
import { ChartsModule } from 'ng2-charts';

>>>>>>> 6795cf84e3e03e82fa2c3b85448290afb44de811




// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    LostfoundItemComponent,
    AdminNewComponent,
    ModNewComponent,
    UserDashboardComponent,
    ModDashboardComponent,
    AdminDashboardComponent,
    TestComponent,
    UserProfileComponent,
    OwnItemsComponent,
    ProfileComponent,
<<<<<<< HEAD
    ComplainComponent,
=======
    EdituserprofileComponent,


    ComplainComponent,
    LostfoundItemCardComponent,
    AdminModProfileComponent,
>>>>>>> 6795cf84e3e03e82fa2c3b85448290afb44de811
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgFlashMessagesModule.forRoot(),
    ModalModule.forRoot(),
    ChartsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [
    authInterceptorProviders,
    AuthenticationService,
    ValidateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
