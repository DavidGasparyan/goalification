import { Injectable } from "@nestjs/common";
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { Goal } from "./models/goal.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class GoalsService {

  constructor(
    @InjectModel(Goal) private readonly goalModel: typeof Goal,
  ) {
  }

  create(createGoalDto: CreateGoalDto) {
    return this.goalModel.create<Goal>(createGoalDto);
  }

  findAll(userId: string) {
    return this.goalModel.findAll<Goal>({
      where: {
        user_id: userId,
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} goal`;
  }

  update(id: number, updateGoalDto: UpdateGoalDto) {
    return `This action updates a #${id} goal`;
  }

  remove(id: number) {
    return `This action removes a #${id} goal`;
  }
}
