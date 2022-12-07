import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { MatSort, Sort } from "@angular/material/sort";
import { IGoal } from "../../../../../../libs/interfaces/goal.interface";
import { GoalService } from "../../services/goal.service";

@Component({
  selector: "goalification-goals",
  templateUrl: "./goals.component.html",
  styleUrls: ["./goals.component.scss"]
})
export class GoalsComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "description", "status"];
  dataSource!: MatTableDataSource<IGoal>;

  constructor(
    private readonly _liveAnnouncer: LiveAnnouncer,
    private readonly _goalService: GoalService,
  ) {}

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit() {
    this._goalService.get().subscribe(data => {
      this.dataSource =  new MatTableDataSource<IGoal>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
