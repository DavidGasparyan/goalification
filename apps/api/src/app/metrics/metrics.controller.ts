import { Controller, Get } from '@nestjs/common';
import { MetricsService } from "./metrics.service";
import { Public } from "nest-keycloak-connect";

@Controller('metrics')
export class MetricsController {
  constructor(private metricsService: MetricsService) {}

  @Get()
  @Public()
  public metrics(): Promise<string> {
    return this.metricsService.metrics;
  }
}
