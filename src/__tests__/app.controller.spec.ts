import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { HealthDto } from '../dto';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(appController).toBeDefined();
  });

  describe('heath endpoint', () => {
    it('should return the health status object', async () => {
      const healthStatus: HealthDto = await appController.getHealth();

      expect(healthStatus).toBeDefined();
      expect(healthStatus.status).toEqual('OK');
    });
  });
});
