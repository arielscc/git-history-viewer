import axios from 'axios'

export const commitInstance = axios.create({
  baseURL: 'https://git-history-viewer-production.up.railway.app'
})
