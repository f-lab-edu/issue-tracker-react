export type BoardColumnType = {
  boardId: string;
  title: string;
  items: BoardItemType[];
};

export type BoardItemType = {
  itemId: string;
  title: string;
  author: string;
};

export type BoardParamsType = {
  boardId: string;
  title: string;
  itemId: string;
  targetIndex: number;
};
