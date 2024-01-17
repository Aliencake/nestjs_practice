import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type: 'postgres',
    database: process.env.DATABASE_NAME,
    port: 32768,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: String(process.env.DATABASE_PASSWORD),
    entities: [],
  }),
  UsersModule,
  AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
