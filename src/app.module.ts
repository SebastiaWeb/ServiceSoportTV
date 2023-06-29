import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// BD
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { TechnicalModule } from './technical/technical.module';
import { ServicesSoportModule } from './services_soport/services_soport.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'smartinfo',
      database: 'ServiceSoportTV',
      entities:  ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    TechnicalModule,
    ClientModule,
    ServicesSoportModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
