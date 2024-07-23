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
