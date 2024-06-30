import { api, API_URL } from '@/services/api.service';

const useApiService = () => ({
  get: (url: string, options = {}) => api.get(url, options),
  post: (url: string, data: any, options = {}) => api.post(url, data, options),
  put: (url: string, data: any, options = {}) => api.put(url, data, options),
  delete: (url: string, options = {}) => api.delete(url, options),
  apiUrl: API_URL,
});

export default useApiService;
