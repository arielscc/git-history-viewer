import axios from 'axios';

export const commitInstance = axios.create({
  baseURL: import.meta.env.VITE_GIT_COMMITS_URL
});
