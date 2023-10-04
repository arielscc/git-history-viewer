import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommitsController } from './commits/commits.controller';
import { AppConfig } from './config/app.config';
import { AuthService } from './github/auth.service';
import { GithubService } from './github/github.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [CommitsController],
  providers: [GithubService, AuthService, AppConfig],
})
export class AppModule {}
