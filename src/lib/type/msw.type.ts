import { DefaultBodyType, Path, PathParams, RequestHandler, rest } from 'msw';
import { BoardColumnType, BoardItemType, BoardParamsType } from '@lib/type/board.type';

type ResponseCallbackParams = {
  params?: PathParams;
  data?: DefaultBodyType;
};

type ResponseCallback = (params: ResponseCallbackParams) => any;

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
  boards: BoardColumnType[];
  getBoards: () => BoardColumnType[];
  getBoardById: (boardId: string) => BoardColumnType | undefined;
  getBoardItemById: ({ boardId, itemId }: Pick<BoardParamsType, 'boardId' | 'itemId'>) => BoardItemType | null;
  getBoardLastItemById: (boardId: string) => BoardItemType | null;
  addBoardById: ({ boardId, title }: Pick<BoardParamsType, 'boardId' | 'title'>) => void;
  moveBoardItem: ({ itemId, boardId, targetIndex }: Pick<BoardParamsType, 'itemId' | 'boardId' | 'targetIndex'>) => void;
  removeBoardColumnById: (boardId: string) => void;
  removeBoardItemById: ({ boardId, itemId }: Pick<BoardParamsType, 'boardId' | 'itemId'>) => void;
  updateBoardItemById: ({ boardId, itemId, title }: Pick<BoardParamsType, 'boardId' | 'itemId' | 'title'>) => void;
  updateBoardColumnById: ({ boardId, title }: Pick<BoardParamsType, 'boardId' | 'title'>) => void;
  addBoardColumn: (title: string) => void;
}
