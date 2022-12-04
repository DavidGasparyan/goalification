import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { KeycloakService } from "keycloak-angular";
import { map, take } from "rxjs";

@Component({
  selector: 'goalification-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ui';

  constructor(
    private readonly http: HttpClient,
    private readonly keycloakService: KeycloakService,
  ) {}

  ngOnInit(): void {
    // this.keycloakService.getToken().then(console.log)
    // this.keycloakService.loadUserProfile().then(console.log);
    // console.log('update!');

    this.http.get('http://localhost:3333/api/goals', { params: {
        userId: '73048a0f-e4d9-4650-b49f-8efc3340b0e5',
      } })
      .subscribe(console.log);
  }
}
