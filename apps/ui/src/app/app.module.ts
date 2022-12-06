import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './components/content/content.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://host.docker.internal:8080/auth',
        realm: 'goalification',
        clientId: 'angular-app',
      },
      initOptions: {
        onLoad: 'login-required',
        flow: 'standard',
        checkLoginIframe: false
      },
      shouldAddToken: (request) => {
        const { method, url } = request;

        const isGetRequest = 'GET' === method.toUpperCase();
        const acceptablePaths = ['/assets', '/clients/public'];
        const isAcceptablePathMatch = acceptablePaths.some((path) =>
          url.includes(path)
        );

        return !(isGetRequest && isAcceptablePathMatch);
      },
    });
}

@NgModule({
  declarations: [AppComponent, ContentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
