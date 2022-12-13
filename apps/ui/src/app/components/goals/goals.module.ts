import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals.component';
import { MatTableModule } from "@angular/material/table";
import { ShopRoutingModule } from "./goals-routing.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from '@angular/material/dialog';
import { CreateGoalComponent } from "./_components/create-goal/create-goal.component";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [GoalsComponent, CreateGoalComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ShopRoutingModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  exports: [GoalsComponent]
})
export class GoalsModule {}
