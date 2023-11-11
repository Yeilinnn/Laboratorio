import { Test, TestingModule } from '@nestjs/testing';
import { CurseController } from './curse.controller';
import { CurseService } from './curse.service';

describe('CoursesController', () => {
  let controller: CurseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurseController],
      providers: [CurseService],
    }).compile();

    controller = module.get<CurseController>(CurseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
