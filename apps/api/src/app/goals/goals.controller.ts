import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Query
} from "@nestjs/common";
import { GoalsService } from './goals.service';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { Roles } from "nest-keycloak-connect";

@Controller('goals')
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Post()
  async create(@Body() createGoalDto: CreateGoalDto) {
    return await this.goalsService.create(createGoalDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.goalsService.findOne(+id);
  }

  @Get()
  @Roles({ roles: ['user'] })
  async findAll(@Query('userId') userId: string) {
    return await this.goalsService.findAll(userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGoalDto: UpdateGoalDto) {
    return this.goalsService.update(+id, updateGoalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goalsService.remove(+id);
  }
}
