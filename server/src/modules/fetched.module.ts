import { Controller, Get } from '@nestjs/common';

@Controller()
export class YourEndpointController {
  @Get('your-endpoint')
  getData() {
    return { message: 'Hello from NestJS' };
  }
}
