import { MdEditCalendar } from 'react-icons/all';
import { HStack, VStack } from '@ui/components/common';
import styleToken from '@ui/core/styleToken.css';
import { IconButton } from '@ui/components/button';
import { boardItemStyle } from '@ui/components/board/board.css';
import { BoardItemType } from '@lib/type/board.type';
import { useConfirm, useModal } from '@lib/hooks';
import { apiDeleteBoardItem, apiPatchBoardItem } from '@lib/api/board.ts';
import useStore from '@lib/store/useStore.ts';
import { editBoardItemAction, removeBoardItemAction } from '@lib/store/reducer/boardReducer.ts';
import { TextModal } from '@ui/components/dialog';
import { DELETE_BOARD_ITEM_MESSAGE } from '@/constant/message.ts';

type Props = {
  boardId: string;
} & BoardItemType;

const BoardItem = ({ boardId, itemId, title, author }: Props) => {
  const showConfirm = useConfirm();
  const showModal = useModal();
  const { dispatch } = useStore();
  const handleDeleteBoardItem = async () => {
    const confirm = await showConfirm(DELETE_BOARD_ITEM_MESSAGE, { enableBackdropClick: true });
    if (confirm) {
      await apiDeleteBoardItem({ boardId, itemId });
      dispatch(removeBoardItemAction({ boardId, itemId }));
    }
  };

  const handleEditBoardTitleDbClick = async () => {
    const contentText = await showModal(<TextModal title="이슈 콘텐츠 수정" type="textarea" value={title} />);
    if (typeof contentText === 'string') {
      await apiPatchBoardItem({ boardId, itemId, title: contentText });
      dispatch(editBoardItemAction({ boardId, itemId, title: contentText }));
    }
  };
  return (
    <HStack className={boardItemStyle.container} data-id={itemId} draggable onDoubleClick={handleEditBoardTitleDbClick}>
      <VStack className={boardItemStyle.contentHeader}>
        <MdEditCalendar color={styleToken.color.gray600} size={18} />
      </VStack>
      <VStack className={boardItemStyle.contentBody}>
        <div>{title}</div>
        <div>
          <span>added by</span>
          <strong className={boardItemStyle.author}>{author}</strong>
        </div>
      </VStack>
      <HStack className={boardItemStyle.contentFooter}>
        <IconButton
          icon="close"
          onClick={handleDeleteBoardItem}
          style={{
            flex: 'unset',
          }}
        />
      </HStack>
    </HStack>
  );
};

export default BoardItem;
