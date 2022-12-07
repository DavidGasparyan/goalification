import { Controller, Get } from "@nestjs/common";
import { HealthService } from "./health.service";
import { HealthCheckResult } from "@nestjs/terminus";
import { Public } from "nest-keycloak-connect";

@Controller('health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get()
  @Public()
  public async check(): Promise<HealthCheckResult> {
    return await this.healthService.check();
  }
}
