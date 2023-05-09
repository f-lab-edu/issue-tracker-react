import { PageHeader, PageLayout, PageBody } from '@ui/components/layout';
import { Board, BoardColumnCreate } from '@ui/components/board';
import { DraggableArea } from '@ui/components/common';
import { useUpdateInitialBoard } from '@lib/hooks';
import useStore from '@lib/store/useStore';

const MainPage = () => {
  const { selector } = useStore();
  const boards = selector((state) => state.boards);

  useUpdateInitialBoard();
  return (
    <PageLayout>
      <PageHeader />
      <PageBody>
        <DraggableArea
          onDrop={(data) => {
            console.log('drop', data);
          }}
        >
          {boards.map((board) => (
            <Board key={board.boardId} boardId={board.boardId} title={board.title} items={board.items} />
          ))}
        </DraggableArea>
        <BoardColumnCreate onClick={() => {}} />
      </PageBody>
    </PageLayout>
  );
};

export default MainPage;
