import { Test, TestingModule } from '@nestjs/testing';
import { GoalsService } from './goals.service';
import { Goal } from "./models/goal.model";
import { CreateGoalDto } from "./dto/create-goal.dto";
import { UpdateGoalDto } from "./dto/update-goal.dto";

class GoalServiceMock {

  create(createGoalDto: CreateGoalDto) {
    return {} as Goal;
  }

  findOne(id: number) {
    return {} as Goal;
  }

  findAll(userId: string) {
    return [] as Goal[];
  }

  update(id: number, updateGoalDto: UpdateGoalDto){
    return id;
  }

  remove(id: number) {
    return {} as Goal;
  }
}

describe('GoalsService', () => {
  let goalService: GoalsService;

  beforeAll(async () => {
    const GoalServiceProvider = {
      provide: GoalsService,
      useClass: GoalServiceMock,
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GoalsService, GoalServiceProvider
      ],
    }).compile();

    goalService = module.get<GoalsService>(GoalsService);
  })

  it('should call create method with expected params', async () => {
    const createGoal = jest.spyOn(goalService, 'create');

    const dto = new CreateGoalDto();

    await goalService.create(dto);

    expect(createGoal).toHaveBeenCalledWith(dto);
  });

  it('should call findOne method with expected param', async () => {
    const findOneGoal = jest.spyOn(goalService, 'findOne');
    const goalId = 1;

    await goalService.findOne(goalId);

    expect(findOneGoal).toHaveBeenCalledWith(goalId);
  });

  it('should call findAll method with expected params', async () => {
    const findAllGoal = jest.spyOn(goalService, 'findAll');
    const userId = '73048a0f-e4d9-4650-b49f-8efc3340b0e5';

    await goalService.findAll(userId);

    expect(findAllGoal).toHaveBeenCalledWith(userId);
  });

  it('should call update method with expected params', async () => {
    const updateGoal= jest.spyOn(goalService, 'update');
    const goalId = 1;
    const dto = new UpdateGoalDto();

    await goalService.update(goalId, dto);

    expect(updateGoal).toHaveBeenCalledWith(goalId, dto);
  });

  it('should call remove method with expected params', async () => {
    const removeGoal = jest.spyOn(goalService, 'remove');
    const goalId = 1;

    await goalService.remove(goalId);

    expect(removeGoal).toHaveBeenCalledWith(goalId);
  });
});
