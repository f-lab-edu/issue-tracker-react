import { v4 as uuidv4 } from 'uuid';

import { IMockStore } from '@lib/type/msw.type';
import { BoardColumnType, BoardItemType, BoardParamsType } from '@lib/type/board.type';
import { insertBoardItem, removeBoardItem, updateBoardColumnTitleById, updateBoardItemTitleById } from '@lib/utils/board';

type GetTemplateBoardColumn = (title?: string) => BoardColumnType;
type GetTemplateBoardColumnWithItems = (title?: string) => BoardColumnType;
type GetTemplateBoardItem = (title?: string) => BoardItemType;

const getTemplateBoardColumn: GetTemplateBoardColumn = (title: string = '') => ({
  boardId: uuidv4(),
  title,
  items: [],
});

const getTemplateBoardColumnWithItems: GetTemplateBoardColumnWithItems = (title = '') => ({
  boardId: uuidv4(),
  title,
  items: [getTemplateBoardItem(`${title} - 1`), getTemplateBoardItem(`${title} - 2`), getTemplateBoardItem(`${title} - 3`), getTemplateBoardItem(`${title} - 4`)],
});

const getTemplateBoardItem: GetTemplateBoardItem = (title = '') => ({
  itemId: uuidv4(),
  title,
  author: 'bytrustu',
});

class MockStore implements IMockStore {
  boards: BoardColumnType[];

  constructor() {
    this.boards = [getTemplateBoardColumnWithItems('할 일'), getTemplateBoardColumnWithItems('진행 중'), getTemplateBoardColumnWithItems('완료')];
  }

  getBoards() {
    return this.boards;
  }

  getBoardById(boardId: string) {
    return this.boards.find((data) => data.boardId === boardId);
  }

  getBoardItemById({ boardId, itemId }: Pick<BoardParamsType, 'boardId' | 'itemId'>) {
    const board = this.getBoardById(boardId);
    if (!board) {
      return null;
    }
    const item = board.items.find((item) => item.itemId === itemId);
    if (!item) {
      return null;
    }
    return item;
  }

  getBoardLastItemById(boardId: string) {
    const board = this.getBoardById(boardId);
    if (!board) {
      return null;
    }
    return board.items[board.items.length - 1];
  }

  addBoardById({ boardId, title }: Pick<BoardParamsType, 'boardId' | 'title'>) {
    const boardIndex = this.boards.findIndex((data) => data.boardId === boardId);
    if (boardIndex !== -1) {
      const board = getTemplateBoardItem(title);
      this.boards[boardIndex].items.push(board);
    }
  }

  moveBoardItem({ boardId, itemId, targetIndex }: Pick<BoardParamsType, 'boardId' | 'itemId' | 'targetIndex'>) {
    const findBoardItem = [...this.boards.map((board) => board.items).flat()].find((item) => item.itemId === itemId);
    if (!findBoardItem) {
      return;
    }
    const boardsWithoutItem = removeBoardItem(this.boards, itemId);
    this.boards = insertBoardItem(boardsWithoutItem, boardId, findBoardItem, targetIndex);
  }

  removeBoardColumnById(boardId: string) {
    this.boards = this.boards.filter((data) => data.boardId !== boardId);
  }

  removeBoardItemById({ boardId, itemId }: Pick<BoardParamsType, 'boardId' | 'itemId'>) {
    const boardIndex = this.boards.findIndex((data) => data.boardId === boardId);
    if (boardIndex !== -1) {
      this.boards[boardIndex].items = this.boards[boardIndex].items.filter((item) => item.itemId !== itemId);
    }
  }

  updateBoardItemById({ boardId, itemId, title }: Pick<BoardParamsType, 'boardId' | 'itemId' | 'title'>) {
    this.boards = updateBoardItemTitleById(this.boards, boardId, itemId, title);
  }

  updateBoardColumnById({ boardId, title }: Pick<BoardParamsType, 'boardId' | 'title'>) {
    this.boards = updateBoardColumnTitleById(this.boards, boardId, title);
  }

  addBoardColumn(title: string) {
    const board = getTemplateBoardColumn(title);
    this.boards.push(board);
    return board;
  }
}

const mockStore = new MockStore();

export default mockStore;
