import { Injectable } from "@nestjs/common";
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { Goal } from "./models/goal.model";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class GoalsService {

  constructor(
    @InjectModel(Goal) private readonly goalModel: typeof Goal,
  ) {}

  create(createGoalDto: CreateGoalDto): Promise<Goal> {
    return this.goalModel.create<Goal>(createGoalDto);
  }

  findAll(userId: string): Promise<Goal[]> {
    return this.goalModel.findAll<Goal>({
      where: {
        userId,
      }
    });
  }

  findOne(id: number): Promise<Goal> {
    return this.goalModel.findOne<Goal>({
      where: {
        id,
      }
    })
  }

  update(id: number, updateGoalDto: UpdateGoalDto) {
    return this.goalModel.update<Goal>(
      { ...updateGoalDto },
      {
        where: {
          id,
        }
      })
  }

  async remove(id: number) {
    await this.goalModel.update<Goal>( { isDeleted: true}, { where: { id } } );
    return this.findOne(id);
  }
}
