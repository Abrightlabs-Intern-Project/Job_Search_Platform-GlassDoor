import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';


const port = process.env.PORT || 3000
console.log(`Launching NestJS app on port ${port}, URL: http://0.0.0.0:${port}`)

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  });
    await app.listen(port);
}
bootstrap();
