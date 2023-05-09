import { BoardColumnType, BoardItemType } from '@lib/type/board.type';
import { insertBoardItem, removeBoardItem, updateBoardColumnTitleById, updateBoardItemTitleById } from '@lib/utils/board';

export const SET_INITIAL_BOARD_ACTION = 'BOARD/SET_INITIAL' as const;
export const ADD_BOARD_ITEM_ACTION = 'BOARD/ADD_ITEM' as const;
export const REMOVE_BOARD_ITEM_ACTION = 'BOARD/REMOVE_ITEM' as const;
export const EDIT_BOARD_ITEM_ACTION = 'BOARD/EDIT_ITEM' as const;
export const ADD_BOARD_COLUMN_ACTION = 'BOARD/ADD_COLUMN' as const;
export const EDIT_BOARD_COLUMN_ACTION = 'BOARD/EDIT_COLUMN' as const;
export const MOVE_BOARD_ITEM_ACTION = 'BOARD/MOVE_ITEM' as const;
export const REMOVE_BOARD_COLUMN_ACTION = 'BOARD/REMOVE_COLUMN' as const;

export const setInitialBoardAction = (payload: BoardColumnType[]) => ({
  type: SET_INITIAL_BOARD_ACTION,
  payload,
});

export const addBoardItemAction = (payload: { boardId: string; item: BoardItemType }) => ({
  type: ADD_BOARD_ITEM_ACTION,
  payload,
});

export const removeBoardItemAction = (payload: { boardId: string; itemId: string }) => ({
  type: REMOVE_BOARD_ITEM_ACTION,
  payload,
});

export const editBoardItemAction = (payload: { boardId: string; itemId: string; title: string }) => ({
  type: EDIT_BOARD_ITEM_ACTION,
  payload,
});

export const addBoardColumnAction = (payload: BoardColumnType) => ({
  type: ADD_BOARD_COLUMN_ACTION,
  payload,
});

export const editBoardColumnAction = (payload: { boardId: string; title: string }) => ({
  type: EDIT_BOARD_COLUMN_ACTION,
  payload,
});

export const moveBoardItemAction = (payload: { boardId: string; itemId: string; targetIndex: number }) => ({
  type: MOVE_BOARD_ITEM_ACTION,
  payload,
});

export const removeBoardColumnAction = (payload: string) => ({
  type: REMOVE_BOARD_COLUMN_ACTION,
  payload,
});

export const initialState: BoardState = {
  boards: [],
};

type BoardState = {
  boards: BoardColumnType[];
};

export type BoardAction = ReturnType<
  | typeof setInitialBoardAction
  | typeof addBoardItemAction
  | typeof removeBoardItemAction
  | typeof editBoardItemAction
  | typeof addBoardColumnAction
  | typeof editBoardColumnAction
  | typeof moveBoardItemAction
  | typeof removeBoardColumnAction
>;

const reducer = (state: BoardState, action: BoardAction) => {
  switch (action.type) {
    case SET_INITIAL_BOARD_ACTION:
      return {
        ...state,
        boards: action.payload,
      };
    case ADD_BOARD_ITEM_ACTION: {
      const { boardId, item } = action.payload;
      return {
        ...state,
        boards: state.boards.map((board) => {
          if (board.boardId === boardId) {
            return {
              ...board,
              items: [...board.items, item],
            };
          }
          return board;
        }),
      };
    }
    case REMOVE_BOARD_ITEM_ACTION: {
      const { boardId, itemId } = action.payload;
      return {
        ...state,
        boards: state.boards.map((board) => {
          if (board.boardId === boardId) {
            return {
              ...board,
              items: board.items.filter((item) => item.itemId !== itemId),
            };
          }
          return board;
        }),
      };
    }
    case EDIT_BOARD_ITEM_ACTION: {
      const { boardId, itemId, title } = action.payload;
      const boards = updateBoardItemTitleById(state.boards, boardId, itemId, title);
      return {
        ...state,
        boards,
      };
    }
    case ADD_BOARD_COLUMN_ACTION:
      return {
        ...state,
        boards: [...state.boards, action.payload],
      };
    case EDIT_BOARD_COLUMN_ACTION: {
      const { boardId, title } = action.payload;
      return {
        ...state,
        boards: updateBoardColumnTitleById(state.boards, boardId, title),
      };
    }
    case MOVE_BOARD_ITEM_ACTION: {
      const { boardId, itemId, targetIndex } = action.payload;
      const findBoardItem = state.boards.flatMap((board) => board.items).find((item) => item.itemId === itemId);
      if (!findBoardItem) {
        return state;
      }
      const boardsWithoutItem = removeBoardItem(state.boards, itemId);
      return {
        ...state,
        boards: insertBoardItem(boardsWithoutItem, boardId, findBoardItem, targetIndex),
      };
    }
    case REMOVE_BOARD_COLUMN_ACTION:
      return {
        ...state,
        boards: state.boards.filter((board) => board.boardId !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
