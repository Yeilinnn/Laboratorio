// courses.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CurseService } from './curse.service';
import { CreateCurseDto } from './dto/create-curse.dto';

@Controller('curse')
export class CurseController {
  constructor(private readonly curseService: CurseService) {}

  @Post()
  create(@Body() createCurseDto: CreateCurseDto) {
    return this.curseService.create(createCurseDto);
  }

  @Get()
  findAll() {
    return this.curseService.findAll();
  }
}
