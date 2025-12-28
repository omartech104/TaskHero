import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from '../entities/tasks.entity';
import { CreateTask, CreateTask as CreateTaskDto } from './dto/CreateDTO.dto';
import { NotFoundException, ConflictException } from '@nestjs/common';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private readonly TasksRepository: Repository<Tasks>,
  ) {}

  async InsertToDb(dto: CreateTaskDto): Promise<Tasks> {
    // Check if the string title is already taken
    const exists = await this.TasksRepository.findOneBy({ name: dto.name });
    if (exists) {
      throw new ConflictException('A task with this title already exists');
    }

    const newTask = this.TasksRepository.create(dto);
    return await this.TasksRepository.save(newTask);
  }
  async getAllTasks(): Promise<Tasks[]> {
    return await this.TasksRepository.find();
  }
  async getTaskById(id: number): Promise<Tasks> {
    const task = await this.TasksRepository.findOneBy({ id });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task;
  }
  async checkTasks(id: number, dto: CreateTask) {
    return await this.TasksRepository.update({ id }, dto);
  }
  async removeTasks(id: number) {
    return await this.TasksRepository.delete({
      id,
    });
  }
}
