import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as cors from 'cors'; // Importa el módulo de CORS
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para la aplicación Nest.js
  app.enableCors();


  await app.listen(3000);
}

bootstrap();
