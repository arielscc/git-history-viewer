import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EnhancedCommit } from 'src/interfaces/commit.interface';
import { AuthService } from './auth.service';

@Injectable()
export class GithubService {
  constructor(private config: AuthService) {}

  async getCommits(
    owner: string,
    repo: string,
    page: number,
    perPage: number,
  ): Promise<EnhancedCommit[]> {
    try {
      const response = await this.fetchCommits(owner, repo, page, perPage);

      return this.parseCommits(response.data);
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

  async fetchCommits(owner, repo, page, perPage) {
    const octokit = this.config.getOctokit();
    return await octokit.request('GET /repos/{owner}/{repo}/commits', {
      owner,
      repo,
      page,
      per_page: perPage,
    });
  }

  parseCommits(data) {
    return data.map((commit) => ({
      sha: commit.sha,
      message: commit.commit.message,
      author: {
        avatarUrl: commit.author.avatar_url,
        htmlUrl: commit.author.html_url,
        login: commit.author.login,
      },
      date: commit.commit.author.date,
      url: commit.url,
      htmlUrl: commit.html_url,
      commentCount: commit.commit.comment_count,
      treeSha: commit.commit.tree.sha,
      verificationReason: commit.commit.verification.reason,
      verified: commit.commit.verification.verified,
    }));
  }
}
