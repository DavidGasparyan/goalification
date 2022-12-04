import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { ContentComponent } from "./components/content/content.component";

const routes: Routes = [
  { path: '',  canActivate: [AuthGuard], children: [
      { path: '', component: ContentComponent },
      { path: 'goals', loadChildren: () => import('./components/goals/goals.module').then(m => m.GoalsModule) }
    ] },
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
