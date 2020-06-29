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

// services
import { AuthenticationService } from './services/authentication.service';
import { ValidateService } from './services/validate.service';

// ngx-bootstrap
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LostfoundItemComponent } from './components/lostfound-item/lostfound-item.component';
import { AdminNewComponent } from './pages/admin-new/admin-new.component';
import { ModNewComponent } from './pages/mod-new/mod-new.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ModDashboardComponent } from './pages/mod-dashboard/mod-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgFlashMessagesModule.forRoot(),
    ModalModule.forRoot(),
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
    AuthenticationService,
    ValidateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
