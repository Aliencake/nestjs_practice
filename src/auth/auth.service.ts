import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    return {msg: `logged in`};
  }

  signup() {
    return {msg: `signed up`};
  }
}