import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UserInfoModule } from './userinfo/userinfo.module';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const options = new DocumentBuilder()
    .setTitle('Sender API')
    .setDescription('Sender api')
    .setVersion('1.0')
    .setSchemes('https', 'http')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger-ui', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
