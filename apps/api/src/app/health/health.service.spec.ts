import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from './health.service';

class HealthServiceMock {
  check() {
    return
  }
}

describe('HealthService', () => {
  let healthService: HealthService;

  beforeAll(async () => {
    const HealthServiceProvider = {
      provide: HealthService,
      useClass: HealthServiceMock,
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HealthService, HealthServiceProvider
      ],
    }).compile();

    healthService = module.get<HealthService>(HealthService);
  })

  it('should be defined', () => {
    expect(healthService).toBeDefined();
  });

  it('should call check method with expected params', async () => {
    const checkHealth = jest.spyOn(healthService, 'check');

    await healthService.check();

    expect(checkHealth).toHaveBeenCalledWith();
  });
});
