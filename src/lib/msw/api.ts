import { rest } from 'msw';

import MockStore from '@lib/msw/MockStore';
import { MockServer } from '@lib/type/msw.type';
import { isObjectEmpty } from '@lib/utils/object';

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
    responseCallback: () => MockStore.addBoard('이슈 트래커 리액트'),
  });

export default [mockGetBoards];
