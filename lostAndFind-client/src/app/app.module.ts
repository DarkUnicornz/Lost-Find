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
    FooterComponent
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
  ],
  providers: [
    AuthenticationService,
    ValidateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
