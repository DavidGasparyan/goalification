import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './components/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from "@angular/material/dialog";

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: '/auth',
        realm: 'goalification',
        clientId: 'angular-app',
      },
      initOptions: {
        onLoad: 'login-required',
        flow: 'standard',
        checkLoginIframe: false,
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
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
