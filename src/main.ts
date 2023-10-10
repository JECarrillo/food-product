import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as cors from 'cors'; // Importa el módulo de CORS
import * as session from 'express-session';
import * as passport from 'passport';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para la aplicación Nest.js
  app.enableCors();

app.useGlobalPipes(
  new ValidationPipe({
    whitelist:true,
    
    transform: true,
  })
)
  await app.listen(3000);
}

bootstrap();
