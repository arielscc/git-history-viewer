export interface EnhancedCommit {
  sha: string;
  message: string;
  author: {
    login: string;
    avatarUrl: string;
    htmlUrl: string;
  };
  url: string;
  htmlUrl: string;
  date: string;
  commentCount: number;
  treeSha: string;
  verified: boolean;
  verificationReason: string;
}
