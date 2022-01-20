import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const text = process.env.TEXT || 'Hello World From NestJS!';    
    return text;
  }
}
