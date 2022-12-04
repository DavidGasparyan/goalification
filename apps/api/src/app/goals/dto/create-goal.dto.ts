export class CreateGoalDto {
  readonly name: string;
  readonly description: string;
  readonly status: string;
  readonly userId: string;
  readonly isDeleted: boolean;
}
