import { importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { provideRouter, Routes, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { InMemoryDataService } from './app/in-memory-data.service';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { HeroDetailComponent } from './app/hero-detail/hero-detail.component';
import { HeroesComponent } from './app/heroes/heroes.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withInMemoryScrolling({   scrollPositionRestoration: 'enabled' })),
    provideHttpClient(), importProvidersFrom( HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false
    })
    ),
  ]
}).catch(err => console.error(err));
  
//platformBrowserDynamic().bootstrapModule(AppComponent)



