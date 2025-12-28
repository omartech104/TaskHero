import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Enable CORS so the HTML file can talk to the server
  app.enableCors({
    origin: '*', // Allow all origins for local development
    methods: 'GET,POST,PUT,PATCH,DELETE',
  });

  // 2. Ensure it's listening on port 3000
  await app.listen(3000);
  console.log('Backend is running on: http://localhost:3000');
}
bootstrap();
