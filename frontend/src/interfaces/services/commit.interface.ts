export interface GithubCommit {
  sha: string;
  message: string;
  author: Author;
  date: string;
  url: string;
  htmlUrl: string;
  commentCount: number;
  treeSha: string;
  verificationReason: string;
  verified: boolean;
}

export interface Author {
  avatarUrl: string;
  htmlUrl: string;
  login: string;
}
