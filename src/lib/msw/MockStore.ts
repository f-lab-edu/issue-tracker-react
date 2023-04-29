import { BoardList, IMockStore } from '@lib/type/msw.type';

class MockStore implements IMockStore {
  boards: BoardList;

  constructor() {
    this.boards = [];
  }

  getBoards() {
    return this.boards;
  }

  addBoard(board: string) {
    this.boards.push(board);
    return this.getBoards();
  }
}

const mockStore = new MockStore();

export default mockStore;
