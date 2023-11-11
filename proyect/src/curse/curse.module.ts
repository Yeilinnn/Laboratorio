import { Module } from '@nestjs/common';
import { CurseService } from './curse.service';
import { CurseController } from './curse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curse } from './entities/curse.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Curse])],
  controllers: [CurseController],
  providers: [CurseService],
})
export class CurseModule {}
