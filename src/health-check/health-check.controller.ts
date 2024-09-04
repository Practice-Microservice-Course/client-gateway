import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthCheckController {
  @Get()
  healthCheck(): string {
    return 'OK: Client Gateway is up and running!';
  }
}
