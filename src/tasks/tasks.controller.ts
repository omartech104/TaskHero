import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  ParseIntPipe,
  Delete,
} from '@nestjs/common'; // Added Body
import { TasksService } from './tasks.service';
import type { CreateTask } from './dto/CreateDTO.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTask) {
    // @Body now works
    return await this.tasksService.InsertToDb(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.getAllTasks();
  }

  @Get(':id') // This 'id' can now be a string name
  findOne(@Param('id') id: number) {
    // Removed ParseIntPipe to allow strings
    return this.tasksService.getTaskById(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    body: CreateTask,
  ) {
    return this.tasksService.checkTasks(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.removeTasks(id);
  }
}
