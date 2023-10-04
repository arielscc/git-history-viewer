import { Injectable } from '@nestjs/common';

@Injectable()
export class AppConfig {
  get githubToken() {
    return process.env.GITHUB_TOKEN;
  }
}
