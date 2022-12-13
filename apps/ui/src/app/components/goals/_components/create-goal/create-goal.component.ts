import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { IGoal } from "../../../../../../../../libs/interfaces/goal.interface";
import { GoalService } from "../../../../services/goal.service";

@Component({
  selector: "goalification-create-goal",
  templateUrl: "./create-goal.component.html",
  styleUrls: ["./create-goal.component.scss"]
})
export class CreateGoalComponent implements OnInit {
  goalCreateForm!: FormGroup<{ name: FormControl<string | null>; description: FormControl<string | null>;}>;

  constructor(
    public dialogRef: MatDialogRef<CreateGoalComponent>,
    private readonly _fb: FormBuilder,
    private readonly _goalService: GoalService,
  ) {
  }

  ngOnInit() {
    this.goalCreateForm = this._fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  get name() {
    return this.goalCreateForm.get('name');
  }

  get description() {
    return this.goalCreateForm.get('description');
  }

  getDescriptionValue() {
    return this.description?.value || '';
  }

  getNameValue() {
    return this.name?.value || '';
  }

  submit() {
    if (this.goalCreateForm.valid) {
      const goal: IGoal = {
        description: this.getDescriptionValue(),
        name: this.getNameValue(),
      }

      this._goalService.create(goal);
      this.goalCreateForm.reset();
      this.dialogRef.close();
    }
  }
}
