import { Module } from '@nestjs/common';
import { TechnicalService } from './technical/technical.service';
import { TechnicalController } from './technical/technical.controller';
import { TechnicalEntity } from './entities/technical.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TechnicalEntity])],
  controllers: [TechnicalController],
  providers: [TechnicalService, TechnicalEntity]
})
export class TechnicalModule {}
