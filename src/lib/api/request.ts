import axiosInstance from '@lib/api/axiosInstance';
import { RequestOptions, RequestParams, RequestParamsWithData } from '@lib/type/api.type';

const requestWithOptions = <T>({ method, url, data, config, onSuccess, onError }: RequestOptions<T>) =>
  axiosInstance[method]<T>(url, data, config)
    .then((response) => {
      if (onSuccess) {
        onSuccess(response);
      }
      return response.data;
    })
    .catch((error) => {
      if (onError) {
        onError(error);
      }
      throw error;
    });

export default {
  get: <T>(...args: RequestParams) => requestWithOptions<T>({ method: 'get', url: args[0], config: args[1] }),
  post: <T>(...args: RequestParamsWithData<T>) => requestWithOptions<T>({ method: 'post', url: args[0], data: args[1], config: args[2] }),
  put: <T>(...args: RequestParamsWithData<T>) => requestWithOptions<T>({ method: 'put', url: args[0], data: args[1], config: args[2] }),
  patch: <T>(...args: RequestParamsWithData<T>) => requestWithOptions<T>({ method: 'patch', url: args[0], data: args[1], config: args[2] }),
  delete: <T>(...args: RequestParams) => requestWithOptions<T>({ method: 'delete', url: args[0], config: args[1] }),
};
