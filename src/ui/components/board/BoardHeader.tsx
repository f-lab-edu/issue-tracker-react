import { useState } from 'react';
import { HStack, VStack } from '@ui/components/common';
import { BoardTitle, BoardItemCreate } from '@ui/components/board';
import useStore from '@lib/store/useStore.ts';
import { apiDeleteBoardColumn, apiPatchBoardColumn, apiPostBoard } from '@lib/api/board.ts';
import { addBoardItemAction, editBoardColumnAction, removeBoardColumnAction } from '@lib/store/reducer/boardReducer.ts';
import { useAlert, useConfirm, useModal } from '@lib/hooks';
import { TextModal } from '@ui/components/dialog';
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
  const showModal = useModal();
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

  const handleEditBoardColumnDbClick = async () => {
    const columnText = await showModal(<TextModal title="이슈 콘텐츠 컬럼 수정" type="textarea" value={title} />);
    if (typeof columnText === 'string') {
      await apiPatchBoardColumn({ boardId, title: columnText });
      dispatch(editBoardColumnAction({ boardId, title: columnText }));
    }
  };

  return (
    <VStack>
      <HStack style={{ justifyContent: 'space-between' }} onDoubleClick={handleEditBoardColumnDbClick}>
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
