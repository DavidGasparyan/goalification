import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals.component';
import { MatTableModule } from "@angular/material/table";
import { ShopRoutingModule } from "./goals-routing.module";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [GoalsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ShopRoutingModule,
    MatPaginatorModule
  ],
  exports: [GoalsComponent]
})
export class GoalsModule {}
