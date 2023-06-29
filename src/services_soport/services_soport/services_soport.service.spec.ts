import { Test, TestingModule } from '@nestjs/testing';
import { ServicesSoportService } from './services_soport.service';

describe('ServicesSoportService', () => {
  let service: ServicesSoportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicesSoportService],
    }).compile();

    service = module.get<ServicesSoportService>(ServicesSoportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
