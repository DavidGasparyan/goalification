import { Test, TestingModule } from '@nestjs/testing';
import { GoalsController } from './goals.controller';
import { GoalsService } from './goals.service';
import { CreateGoalDto } from "./dto/create-goal.dto";
import { UpdateGoalDto } from "./dto/update-goal.dto";

describe('GoalsController', () => {
  let goalsController: GoalsController;
  let goalService: GoalsService;

  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: GoalsService,

      useFactory: () => ({
        create: jest.fn(() => ({})),
        findOne: jest.fn(() => ({})),
        findAll: jest.fn(() => []),
        update: jest.fn(() => 1),
        remove: jest.fn(() => ({}))
      })
    }

    const app: TestingModule = await Test.createTestingModule({
      controllers: [GoalsController],
      providers: [GoalsService, ApiServiceProvider],
    }).compile();

    goalsController = app.get<GoalsController>(GoalsController);
    goalService = app.get<GoalsService>(GoalsService);
  })

  it('should be defined', () => {
    expect(GoalsController).toBeDefined();
  });

  it("calling create method", () => {
    const dto = new CreateGoalDto();
    expect(goalsController.create(dto)).not.toEqual(null);
  })

  it("calling create method", () => {
    const dto = new CreateGoalDto();

    goalsController.create(dto);

    expect(goalService.create).toHaveBeenCalled();
    expect(goalService.create).toHaveBeenCalledWith(dto);
  })

  it("calling findOne method", () => {
    const goalId = '1';

    goalsController.findOne(goalId);

    expect(goalService.findOne).toHaveBeenCalled();
  })

  it("calling findAll method", () => {
    const userId = '73048a0f-e4d9-4650-b49f-8efc3340b0e5';

    goalsController.findAll(userId);

    expect(goalService.findAll).toHaveBeenCalled();
  })

  it("calling update method", () => {
    const userId = '73048a0f-e4d9-4650-b49f-8efc3340b0e5';
    const dto = new UpdateGoalDto();

    goalsController.update(userId, dto);

    expect(goalService.update).toHaveBeenCalled();
  })

  it("calling delete method", () => {
    const goalId = '1';

    goalsController.remove(goalId);

    expect(goalService.remove).toHaveBeenCalled();
  })
});
