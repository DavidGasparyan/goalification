import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { KeycloakService } from "keycloak-angular";
import { from, map, mergeMap } from "rxjs";
import { KeycloakProfile } from "keycloak-js";
import { IGoal } from "../../../../../libs/interfaces/goal.interface";

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(
    private readonly _http: HttpClient,
    private readonly keycloakService: KeycloakService,
  ) {}

   get() {
    const profile$ = from(this.keycloakService.loadUserProfile())

    return profile$.pipe(
     map((profile: KeycloakProfile) => profile?.id || ''),
     mergeMap(id => this._http.get<IGoal[]>('http://host.docker.internal:3333/api/goals', { params: { userId: id } }),
    ));
  }
}
