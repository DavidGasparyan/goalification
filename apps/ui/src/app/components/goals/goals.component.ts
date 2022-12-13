import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { MatSort, Sort } from "@angular/material/sort";
import { IGoal } from "../../../../../../libs/interfaces/goal.interface";
import { GoalService } from "../../services/goal.service";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { CreateGoalComponent } from "./_components/create-goal/create-goal.component";
import { Observable } from "rxjs";

@Component({
  selector: "goalification-goals",
  templateUrl: "./goals.component.html",
  styleUrls: ["./goals.component.scss"]
})
export class GoalsComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "description", "status"];
  dataSource!: MatTableDataSource<IGoal>;
  private goals$!: Observable<IGoal[]>;

  constructor(
    private readonly _liveAnnouncer: LiveAnnouncer,
    private readonly _goalService: GoalService,
    public readonly _dialog: MatDialog,
  ) {}

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngOnInit() {
    this.goals$ = this._goalService.goals$;
    this._goalService.get();

    this.goals$.subscribe((goals: IGoal[]) => {
      this.dataSource =  new MatTableDataSource<IGoal>(goals);
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

  openCreateGoalDialog () {
    const dialogRef = this._dialog.open(CreateGoalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
