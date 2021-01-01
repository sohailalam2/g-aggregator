import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { HealthDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(['', '/health'])
  async getHealth(): Promise<HealthDto> {
    return this.appService.getHealth();
  }
}
