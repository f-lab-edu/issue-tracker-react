import axios, { AxiosInstance } from 'axios';

import { RequestType } from '@lib/type/api.type';

const axiosInstance: RequestType & AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 3000,
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: any) => response,
  (error: any) => {
    const customError = handleErrorResponse(error);
    return Promise.reject(customError);
  },
);

export class CustomError extends Error {
  originError: any;

  constructor(name: string | null, message: string | undefined, originError: any) {
    super(message);
    this.name = name || 'CustomError';
    this.originError = originError;
  }
}

export const handleErrorResponse = (error: any) => {
  const errorMessage = error?.message || 'Unknown error';
  const customError = new CustomError(null, errorMessage, error);

  if (error instanceof CustomError) {
    console.error('CustomError:', customError.name, customError.message);
  } else {
    console.error('Error:', customError.originError?.name, customError.message);
  }

  return customError;
};

export default axiosInstance;
