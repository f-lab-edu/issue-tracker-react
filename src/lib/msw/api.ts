import { rest } from 'msw';

import MockStore from '@lib/msw/MockStore';
import { MockServer } from '@lib/type/msw.type';
import { isObjectEmpty } from '@lib/utils/object';
import { BoardParamsType } from '@lib/type/board.type';

const mockServer: MockServer = ({ method, path, statusCode, responseCallback }) =>
  rest[method](path, (req, res, ctx) => {
    const hasParams = !isObjectEmpty(req.params);
    const hasData = ['post', 'put', 'patch'].includes(method) && !isObjectEmpty(req.body as object | undefined);
    const response = responseCallback({
      ...(hasParams && { params: req.params }),
      ...(hasData && { data: req.body }),
    });
    return res(ctx.status(statusCode), ctx.json(response));
  });

export const mockGetBoards = () =>
  mockServer({
    method: 'get',
    path: '/api/boards',
    statusCode: 200,
    responseCallback: () => MockStore.getBoards(),
  });

export const mockPostBoard = () =>
  mockServer({
    method: 'post',
    path: '/api/board',
    statusCode: 200,
    responseCallback: ({ data }) => {
      const { boardId, title } = data as Pick<BoardParamsType, 'boardId' | 'title'>;
      MockStore.addBoardById({ boardId, title });
      return MockStore.getBoardLastItemById(boardId);
    },
  });

export const mockPutMoveBoard = () =>
  mockServer({
    method: 'put',
    path: '/api/board/move',
    statusCode: 200,
    responseCallback: ({ data }) => {
      const { boardId, itemId, targetIndex } = data as Pick<BoardParamsType, 'boardId' | 'itemId' | 'targetIndex'>;
      MockStore.moveBoardItem({ boardId, itemId, targetIndex });
      return MockStore.getBoards();
    },
  });

export const mockDeleteBoardColumn = () =>
  mockServer({
    method: 'delete',
    path: '/api/boards/:boardId',
    statusCode: 200,
    responseCallback: ({ params }) => {
      const { boardId } = params as Pick<BoardParamsType, 'boardId'>;
      MockStore.removeBoardColumnById(boardId);
    },
  });

export const mockDeleteBoardItem = () =>
  mockServer({
    method: 'delete',
    path: '/api/board/:boardId/:itemId',
    statusCode: 200,
    responseCallback: ({ params }) => {
      const { boardId, itemId } = params as Pick<BoardParamsType, 'boardId' | 'itemId'>;
      MockStore.removeBoardItemById({ boardId, itemId });
    },
  });

export const mockPatchBoardItem = () =>
  mockServer({
    method: 'patch',
    path: '/api/board/:boardId/:itemId',
    statusCode: 200,
    responseCallback: ({ params, data }) => {
      const { boardId, itemId } = params as Pick<BoardParamsType, 'boardId' | 'itemId'>;
      const { title } = data as Pick<BoardParamsType, 'title'>;
      MockStore.updateBoardItemById({ boardId, itemId, title });
      return MockStore.getBoardItemById({ boardId, itemId });
    },
  });

export const mockPatchBoardColumn = () =>
  mockServer({
    method: 'patch',
    path: '/api/board/:boardId',
    statusCode: 200,
    responseCallback: ({ params, data }) => {
      const { boardId } = params as Pick<BoardParamsType, 'boardId'>;
      const { title } = data as Pick<BoardParamsType, 'title'>;
      MockStore.updateBoardColumnById({ boardId, title });
      return MockStore.getBoardById(boardId)?.title;
    },
  });

export const mockPostBoardColumn = () =>
  mockServer({
    method: 'post',
    path: '/api/boards',
    statusCode: 200,
    responseCallback: ({ data }) => {
      const { title } = data as Pick<BoardParamsType, 'title'>;
      return MockStore.addBoardColumn(title);
    },
  });

export default [mockGetBoards, mockPostBoard, mockPutMoveBoard, mockDeleteBoardColumn, mockDeleteBoardItem, mockPatchBoardItem, mockPatchBoardColumn, mockPostBoardColumn];
