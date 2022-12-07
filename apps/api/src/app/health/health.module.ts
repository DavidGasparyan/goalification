import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthController } from "./health.controller";
import { TerminusModule } from "@nestjs/terminus";
import { PrometheusModule } from "../prometheus/prometheus.module";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [TerminusModule, PrometheusModule, HttpModule],
  controllers: [HealthController],
  providers: [HealthService],
  exports: [HealthService]
})
export class HealthModule {}
