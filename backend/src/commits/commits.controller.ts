import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import { GithubService } from 'src/github/github.service';

@Controller('commits')
export class CommitsController {
  constructor(private githubService: GithubService) {}

  @Get(':owner/:repo')
  async getCommits(@Param('owner') owner, @Param('repo') repo, @Query() query) {
    try {
      const { page = 1, perPage = 10 } = query;

      const result = await this.githubService.getCommits(
        owner,
        repo,
        page,
        perPage,
      );

      return result;
    } catch (error) {
      if (error.status === 404) {
        throw new HttpException('Repo not found', HttpStatus.NOT_FOUND);
      }

      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
