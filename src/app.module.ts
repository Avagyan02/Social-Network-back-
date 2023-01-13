import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '../.env' }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        // type: config.get<string>('TYPEORM_CONNECTION'),
        // username: config.get<string>('TYPEORM_USERNAME'),
        // password: config.get<string>('TYPEORM_PASSWORD'),
        // database: config.get<string>('TYPEORM_DATABASE'),
        // port: config.get<number>('TYPEORM_PORT'),
        // entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
        // synchronize: true,
        // autoLoadEntities: true,
        // logging: true,

        type: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'root',
        database: 'social_network',
        port: 5432,
        entities: [__dirname + 'dist/**/*.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
