import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
//import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
// import { HeaderComponent } from './header/header.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { TodoserviceService } from './todoservice.service';


export const routes: Routes = [
   //{ path: 'header', component: HeaderComponent },
   
];
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),provideRouter(routes), provideClientHydration(),TodoserviceService
  ]
};
