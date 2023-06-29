import { Test, TestingModule } from '@nestjs/testing';
import { ServicesSoportController } from './services_soport.controller';

describe('ServicesSoportController', () => {
  let controller: ServicesSoportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicesSoportController],
    }).compile();

    controller = module.get<ServicesSoportController>(ServicesSoportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
