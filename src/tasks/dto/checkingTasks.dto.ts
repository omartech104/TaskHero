import { createZodDto } from 'nestjs-zod';
import { CreateTaskSchema } from './CreateDTO.dto';

// Use Zod's .partial() to make all fields optional
export class CheckingTasks extends createZodDto(CreateTaskSchema.partial()) {}
