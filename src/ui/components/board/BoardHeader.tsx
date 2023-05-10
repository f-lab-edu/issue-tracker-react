import { useState } from 'react';
import { HStack, VStack } from '@ui/components/common';
import { BoardTitle, BoardItemCreate } from '@ui/components/board';
import useStore from '@lib/store/useStore.ts';
import { apiDeleteBoardColumn, apiPostBoard } from '@lib/api/board.ts';
import { addBoardItemAction, removeBoardColumnAction } from '@lib/store/reducer/boardReducer.ts';
import { useAlert, useConfirm } from '@lib/hooks';
import { IconButton } from '../button';
import { DELETE_BOARD_COLUMN_MESSAGE, EMPTY_BOARD_MESSAGE } from '@/constant/message.ts';

type Props = {
  title: string;
  count: number;
  boardId: string;
};

const BoardHeader = ({ title = '', count = 0, boardId }: Props) => {
  const { dispatch } = useStore();
  const showAlert = useAlert();
  const showConfirm = useConfirm();
  const [isTextOpen, setIsTextOpen] = useState(false);

  const handleOpenText = () => {
    setIsTextOpen(true);
  };

  const handleCloseText = () => {
    setIsTextOpen(false);
  };

  const handleSubmitBoardItem = async (title: string) => {
    if (title.trim() === '') {
      showAlert(EMPTY_BOARD_MESSAGE, { enableBackdropClick: true });
      return;
    }
    const item = { boardId, title };
    const responseBoardItem = await apiPostBoard(item);
    dispatch(addBoardItemAction({ boardId, item: responseBoardItem }));
  };

  const handleDeleteBoardColumn = async () => {
    const confirm = await showConfirm(DELETE_BOARD_COLUMN_MESSAGE, { enableBackdropClick: true });
    if (confirm) {
      await apiDeleteBoardColumn(boardId);
      dispatch(removeBoardColumnAction(boardId));
    }
  };

  return (
    <VStack>
      <HStack style={{ justifyContent: 'space-between' }}>
        <BoardTitle title={title} count={count} />
        <HStack>
          <IconButton icon="add" onClick={handleOpenText} />
          <IconButton icon="close" onClick={handleDeleteBoardColumn} />
        </HStack>
      </HStack>
      {isTextOpen && <BoardItemCreate onClose={handleCloseText} onSubmit={handleSubmitBoardItem} />}
    </VStack>
  );
};

export default BoardHeader;
