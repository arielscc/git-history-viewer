import { AxiosError } from 'axios';
import { GithubCommit } from 'interfaces/services/commit.interface';
import { commitInstance } from './axiosService';

export const fetchCommits = async (
  url: string,
  page: number
): Promise<GithubCommit[] | string> => {
  try {
    const regex = /https:\/\/github\.com\/([^/]+)\/([^/]+)\/?$/;
    const testUrl = regex.test(url);

    if (!testUrl) {
      throw new Error('Invalid URL');
    }

    const match = url.match(regex);
    const user = match?.[1];
    const repo = match?.[2];

    const response = await commitInstance.get(`/commits/${user}/${repo}`, {
      params: {
        page: page
      }
    });

    if (response.status !== 200) {
      throw new Error('Error fetching commits');
    }

    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      return error.response?.data.message;
    }
    if (error instanceof Error) {
      return error.message;
    }
    return 'Unknown error, please try again';
  }
};
