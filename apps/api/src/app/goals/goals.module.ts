import { Module } from '@nestjs/common';
import { GoalsService } from './goals.service';
import { GoalsController } from './goals.controller';
import { Goal } from "./models/goal.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  imports: [SequelizeModule.forFeature([Goal])],
  providers: [GoalsService],
  controllers: [GoalsController],
})
export class GoalsModule {}
