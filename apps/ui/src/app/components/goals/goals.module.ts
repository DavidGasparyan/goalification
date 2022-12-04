import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals.component';
import { MatTableModule } from "@angular/material/table";
import { ShopRoutingModule } from "./goals-routing.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";

@NgModule({
  declarations: [GoalsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ShopRoutingModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [GoalsComponent]
})
export class GoalsModule {}
