import { DefaultBodyType, Path, PathParams, RequestHandler, rest } from 'msw';

type ResponseCallbackParams = {
  params?: PathParams;
  data?: DefaultBodyType;
};

type ResponseCallback = (params: ResponseCallbackParams) => BoardList;

type RestMethod = keyof typeof rest;

type MockServerOptions = {
  method: RestMethod;
  path: Path;
  statusCode: number;
  responseCallback: ResponseCallback;
};

type MswRestMethod = (path: Path, resolver: RequestHandler) => ReturnType<(typeof rest)[RestMethod]>;

export type MockServer = (options: MockServerOptions) => ReturnType<MswRestMethod>;

export interface IMockStore {
  boards: BoardList;
  getBoards: () => BoardList;
  addBoard: (board: string) => BoardList;
}

export type BoardList = string[];
