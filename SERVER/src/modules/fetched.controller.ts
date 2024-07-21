import { Controller, Get } from '@nestjs/common';

@Controller()
export class EndPointController {
  @Get('your-endpoint')
  getData() {
    return { message: 'Hello from NestJS' };
  }
}
