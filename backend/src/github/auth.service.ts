import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/core';
import { AppConfig } from 'src/config/app.config';

@Injectable()
export class AuthService {
  constructor(private config: AppConfig) {}

  getOctokit() {
    return new Octokit({
      auth: this.config.githubToken,
    });
  }
}
