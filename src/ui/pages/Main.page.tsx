import { useMemo } from 'react';
import { PageHeader, PageLayout, PageBody } from '@ui/components/layout';
import { Board, BoardColumnCreate } from '@ui/components/board';
import { DraggableArea, VStack } from '@ui/components/common';
import { useModal, useUpdateInitialBoard } from '@lib/hooks';
import useStore from '@lib/store/useStore';
import { TextModal } from '@ui/components/dialog';
import { MoveToElementInfo } from '@lib/utils/dom.ts';
import { apiPostBoardColumn, apiPutMoveBoard } from '@lib/api/board.ts';
import { addBoardColumnAction, moveBoardItemAction } from '@lib/store/reducer/boardReducer.ts';
import { BOARD_COLUMN_MAX_LENGTH } from '@/constant/board.ts';

const MainPage = () => {
  const { selector, dispatch } = useStore();
  const showModal = useModal();
  const boards = selector((state) => state.boards);
  const isVisibleAddColumnButton = useMemo(() => boards.length < BOARD_COLUMN_MAX_LENGTH, [boards]);

  const handleAddColumnClick = async () => {
    const columnText = await showModal(<TextModal title="이슈 컬럼 추가" type="input" />);
    if (typeof columnText === 'string') {
      const responseBoardColumn = await apiPostBoardColumn({ title: columnText });
      dispatch(addBoardColumnAction(responseBoardColumn));
    }
  };

  const handleDropBoardItem = async (moveElement: MoveToElementInfo) => {
    await apiPutMoveBoard(moveElement);
    dispatch(moveBoardItemAction(moveElement));
  };

  useUpdateInitialBoard();

  return (
    <PageLayout>
      <PageHeader />
      <PageBody>
        <DraggableArea onDrop={handleDropBoardItem}>
          {boards.map((board) => (
            <Board key={board.boardId} boardId={board.boardId} title={board.title} items={board.items} />
          ))}
        </DraggableArea>
        {isVisibleAddColumnButton && (
          <VStack>
            <BoardColumnCreate onClick={handleAddColumnClick} />
          </VStack>
        )}
      </PageBody>
    </PageLayout>
  );
};

export default MainPage;
