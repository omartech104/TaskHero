import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const CreateTaskSchema = z.object({
  id: z.number().positive(),
  name: z.string(),
  done: z.boolean(),
});

// Create a class from the schema
export class CreateTask extends createZodDto(CreateTaskSchema) {}
