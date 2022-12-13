import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { KeycloakService } from "keycloak-angular";
import { BehaviorSubject, from, map, mergeMap, Observable } from "rxjs";
import { KeycloakProfile } from "keycloak-js";
import { IGoal } from "../../../../../libs/interfaces/goal.interface";

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private _profile$: Observable<KeycloakProfile> = from(this.keycloakService.loadUserProfile());
  private _goals: IGoal[] = [];
  private _goals$: BehaviorSubject<IGoal[]> = new BehaviorSubject<IGoal[]>(this._goals);

  constructor(
    private readonly _http: HttpClient,
    private readonly keycloakService: KeycloakService,
  ) {}

  get() {
    this._profile$.pipe(
      map((profile: KeycloakProfile) => profile?.id || ''),
      mergeMap(id => this._http.get<IGoal[]>('/api/goals', { params: { userId: id } }),
    ))
    .subscribe((goals: IGoal[]) => {
      this._goals = [ ... goals];
      this._goals$.next(this._goals);
    });
  }

  create(goal: Partial<IGoal>) {
    this._profile$
      .pipe(
        map((profile: KeycloakProfile) => profile?.id || ''),
        mergeMap(id => this._http.post<IGoal>('/api/goals', { ... goal, userId: id }),
      ))
      .subscribe((goal: IGoal) => {
        this._goals.push(goal);
        this._goals$.next(this._goals);
      });
  }

  get goals$() {
    return this._goals$.asObservable();
  }
}
