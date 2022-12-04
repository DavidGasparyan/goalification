import { IGoal } from "../../../../../../libs/interfaces/goal.interface";

export class CreateGoalDto implements IGoal {
  readonly name: string;
  readonly description: string;
  readonly status: string;
  readonly userId: string;
  readonly isDeleted: boolean;
}
