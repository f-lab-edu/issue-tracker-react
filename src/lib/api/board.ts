import request from '@lib/api/request';
import { BoardColumnType, BoardItemType, BoardParamsType } from '@lib/type/board.type';

export const apiGetBoardList = async () => {
  const response = await request.get<BoardColumnType[]>('/boards');
  return response;
};

export const apiDeleteBoardColumn = async (boardId: string) => {
  await request.delete(`/boards/${boardId}`);
};

export const apiPostBoard = async ({ boardId, title }: Pick<BoardParamsType, 'boardId' | 'title'>) => {
  const response = await request.post<BoardItemType>('/board', { boardId, title });
  return response;
};

export const apiPutMoveBoard = async ({ boardId, itemId, targetIndex }: Pick<BoardParamsType, 'boardId' | 'itemId' | 'targetIndex'>) => {
  const response = await request.put<BoardColumnType[]>('/board/move', { boardId, itemId, targetIndex });
  return response;
};

export const apiDeleteBoardItem = async ({ boardId, itemId }: Pick<BoardParamsType, 'boardId' | 'itemId'>) => {
  await request.delete(`/board/${boardId}/${itemId}`);
};

export const apiPatchBoardItem = async ({ boardId, itemId, title }: Pick<BoardParamsType, 'boardId' | 'itemId' | 'title'>) => {
  const response = await request.patch<BoardItemType>(`/board/${boardId}/${itemId}`, { title });
  return response;
};

export const apiPatchBoardColumn = async ({ boardId, title }: Pick<BoardParamsType, 'boardId' | 'title'>) => {
  const response = await request.patch<BoardColumnType>(`/board/${boardId}`, { title });
  return response;
};

export const apiPostBoardColumn = async ({ title }: Pick<BoardParamsType, 'title'>) => {
  const response = await request.post<BoardColumnType>(`/boards`, { title });
  return response;
};
