import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Productos')
    .setDescription('descripcion de API de comida')
    .setVersion('1.0')
    .addTag('producto')
    .build();

    const document =SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api/docs', app, document )

  

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
