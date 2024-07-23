import { v4 as uuidv4 } from 'uuid';

import { BoardColumnType } from '@lib/type/board.type';
import { range } from '@lib/utils/array';

const generatorBoard = (title: string) => ({
  boardId: uuidv4(),
  title,
  items: range(9, 1).map((i) => generateBoardItem(`${title} ${i}`)),
});

const generateBoardItem = (title: string) => ({
  itemId: uuidv4(),
  title,
  author: 'bytrustu',
});

const boardTitles = ['할 일', '진행 중', '완료'];
export const boardFixture: BoardColumnType[] = boardTitles.map(generatorBoard);
