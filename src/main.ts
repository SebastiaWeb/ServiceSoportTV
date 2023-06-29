import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Service Soport and Manteniment TV')
    .setDescription('System Soport TV API')
    .setVersion('1.0.0')
    .addTag('serviceSoport')
    // Remove any security-related settings
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Remove security-related setup
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
