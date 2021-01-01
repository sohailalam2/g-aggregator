import { Injectable } from '@nestjs/common';

import { name, version } from '../package.json';

import { HealthDto } from './dto';

@Injectable()
export class AppService {
  async getHealth(): Promise<HealthDto> {
    return {
      name,
      version,
      status: 'OK',
    };
  }
}
