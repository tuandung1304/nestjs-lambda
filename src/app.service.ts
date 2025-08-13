import { Injectable } from '@nestjs/common';
import { WELCOME_HTML } from './common/constants/welcome.constant';

@Injectable()
export class AppService {
  getHello(): string {
    return WELCOME_HTML;
  }
}
