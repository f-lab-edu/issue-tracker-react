import { PageHeader, PageLayout, PageBody } from '@ui/components/layout';
import { Board } from '@ui/components/board';
import BoardColumnCreate from '@ui/components/board/BoardColumnCreate';
import DraggableArea from '@ui/components/common/DraggableArea';
import { boardFixture } from '@lib/fixture/board.fixture';

const MainPage = () => (
  <PageLayout>
    <PageHeader />
    <PageBody>
      <DraggableArea
        onDrop={(data) => {
          console.log('drop', data);
        }}
      >
        {boardFixture.map((board) => (
          <Board key={board.boardId} boardId={board.boardId} title={board.title} items={board.items} />
        ))}
      </DraggableArea>
      <BoardColumnCreate onClick={() => {}} />
    </PageBody>
  </PageLayout>
);

export default MainPage;
