import { PageHeader, PageLayout, PageBody } from '@ui/components/layout';
import { Board, BoardColumnCreate } from '@ui/components/board';
import { DraggableArea, VStack } from '@ui/components/common';
import { useAlert, useModal, useUpdateInitialBoard } from '@lib/hooks';
import useStore from '@lib/store/useStore';
import useConfirm from '@lib/hooks/useConfirm.tsx';
import { TextModal } from '@ui/components/dialog';

const MainPage = () => {
  const { selector } = useStore();
  const showConfirm = useConfirm();
  const showAlert = useAlert();
  const showModal = useModal();
  const boards = selector((state) => state.boards);

  const handleClickConfirm = async () => {
    const confirm = await showConfirm('컬럼을 추가하시겠습니까?', { enableBackdropClick: true });
    console.log(confirm);
  };

  const handleClickAlert = async () => {
    await showAlert('컬럼을 추가 할 수 없습니다.', { enableBackdropClick: true });
  };

  const handleClickTextareaModal = async () => {
    const result = await showModal(<TextModal title="이슈 콘텐츠 추가" type="textarea" value="안녕하세요1" />);
    console.log(result);
  };

  const handleClickInputModal = async () => {
    const result = await showModal(<TextModal title="이슈 컬럼 추가" type="input" value="안녕하세요2" />);
    console.log(result);
  };

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
        <VStack>
          <BoardColumnCreate onClick={handleClickConfirm} />
          <BoardColumnCreate onClick={handleClickAlert} />
          <BoardColumnCreate onClick={handleClickTextareaModal} />
          <BoardColumnCreate onClick={handleClickInputModal} />
        </VStack>
      </PageBody>
    </PageLayout>
  );
};

export default MainPage;
