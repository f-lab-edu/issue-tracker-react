import { BoardColumnType, BoardItemType } from '@lib/type/board.type';

export const removeBoardItem = (boards: BoardColumnType[], itemId: string) =>
  boards.map((board) => ({
    ...board,
    items: board.items.filter((item) => item.itemId !== itemId),
  }));

export const insertBoardItem = (boards: BoardColumnType[], boardId: string, item: BoardItemType, targetIndex: number) =>
  boards.map((board) => {
    if (board.boardId === boardId) {
      return {
        ...board,
        items: [...board.items.slice(0, targetIndex), item, ...board.items.slice(targetIndex)],
      };
    }
    return board;
  });

export const updateBoardItemTitleById = (boards: BoardColumnType[], boardId: string, itemId: string, title: string) => {
  const boardIndex = boards.findIndex((data) => data.boardId === boardId);
  if (boardIndex !== -1) {
    const boardItemIndex = boards[boardIndex].items.findIndex((item) => item.itemId === itemId);
    if (boardItemIndex !== -1) {
      boards[boardIndex].items[boardItemIndex].title = title;
    }
  }
  return boards;
};

export const updateBoardColumnTitleById = (boards: BoardColumnType[], boardId: string, title: string) => {
  const boardIndex = boards.findIndex((data) => data.boardId === boardId);
  if (boardIndex !== -1) {
    boards[boardIndex].title = title;
  }
  return boards;
};
