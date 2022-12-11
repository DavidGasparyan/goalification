import { Test, TestingModule } from '@nestjs/testing';
import { PrometheusService } from './prometheus.service';
import { Gauge, Histogram } from "prom-client";

class PrometheusServiceMock {

  registerMetrics(
    name: string,
    help: string,
    labelNames: string[],
    buckets: number[]
  ) {
    return {} as Histogram<string>;
  }

  registerGauge(name: string, help: string) {
    return {} as Gauge<string>;
  }

  removeSingleMetric(name: string): void {
    return;
  }

  clearMetrics(): void {
    return;
  }
}

describe('PrometheusService', () => {
  let prometheusService: PrometheusService;

  beforeAll(async () => {
    const PrometheusServiceProvider = {
      provide: PrometheusService,
      useClass: PrometheusServiceMock,
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrometheusService, PrometheusServiceProvider
      ],
    }).compile();

    prometheusService = module.get<PrometheusService>(PrometheusService);
  })

  it('should call registerMetrics method with expected params', async () => {
    const registerMetrics = jest.spyOn(prometheusService, 'registerMetrics');

    const metricsArguments = {
      name: '',
      help: '',
      labelNames: [] as string [],
      buckets: [] as number[],
    };

    const { name, help, labelNames, buckets } = metricsArguments;

    prometheusService.registerMetrics(name, help, labelNames, buckets);

    expect(registerMetrics).toHaveBeenCalledWith(name, help, labelNames, buckets);
  });

  it('should call registerGauge method with expected params', async () => {
    const registerGauge = jest.spyOn(prometheusService, 'registerGauge');

    const metricsArguments = {
      name: '',
      help: '',
    };

    const { name, help} = metricsArguments;

    prometheusService.registerGauge(name, help);

    expect(registerGauge).toHaveBeenCalledWith(name, help);
  });

  it('should call removeSingleMetric method with expected params', async () => {
    const removeSingleMetric = jest.spyOn(prometheusService, 'removeSingleMetric');

    const name = '';

    prometheusService.removeSingleMetric(name);

    expect(removeSingleMetric).toHaveBeenCalledWith(name);
  });

  it('should call clearMetrics method with expected params', async () => {
    const clearMetrics = jest.spyOn(prometheusService, 'clearMetrics');

    prometheusService.clearMetrics();

    expect(clearMetrics).toHaveBeenCalledWith();
  });
});
