import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export type RequestType = (config: AxiosRequestConfig) => Promise<AxiosResponse>;

export type Method = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type RequestOptions<T> = {
  method: Method;
  url: string;
  data?: T;
  config?: AxiosRequestConfig;
  onSuccess?: (response: AxiosResponse<T>) => void;
  onError?: (error: AxiosError) => void;
};

export type RequestParams = [url: string, config?: AxiosRequestConfig];
export type RequestParamsWithData<T> = [url: string, data?: T, config?: AxiosRequestConfig];
