// courses.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { CreateCurseDto } from './dto/create-curse.dto';
import { Curse } from './entities/curse.entity';

@Injectable()
export class CurseService {
  constructor(
    @InjectRepository(Curse)
    private curseRepository: Repository<Curse>,
  ) {}

  create(createCurseDto: CreateCurseDto) {
    const addedCurse = this.curseRepository.create(createCurseDto as DeepPartial< Curse>);
    this.curseRepository.save(addedCurse);
    return addedCurse;
  }

  findAll() {
    return this.curseRepository.find();
  }
}
