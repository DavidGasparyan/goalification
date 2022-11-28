import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { KeycloakService } from "keycloak-angular";

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
    this.keycloakService.loadUserProfile().then(console.log);
    console.log('update!');
    // this.http.get<{ message: string }>('http://localhost:8003/api')
    //   .pipe(take(1), map(cur => cur.message))
    //   .subscribe(res => this.title = res);
  }
}
