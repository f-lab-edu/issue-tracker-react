import { MdEditCalendar } from 'react-icons/all';
import { HStack, VStack } from '@ui/components/common';
import styleToken from '@ui/core/styleToken.css';
import { IconButton } from '@ui/components/button';
import { boardItemStyle } from '@ui/components/board/board.css';
import { BoardItemType } from '@lib/type/board.type';
import { useConfirm } from '@lib/hooks';
import { apiDeleteBoardItem } from '@lib/api/board.ts';
import useStore from '@lib/store/useStore.ts';
import { removeBoardItemAction } from '@lib/store/reducer/boardReducer.ts';
import { DELETE_BOARD_ITEM_MESSAGE } from '@/constant/message.ts';

type Props = {
  boardId: string;
} & BoardItemType;

const BoardItem = ({ boardId, itemId, title, author }: Props) => {
  const showConfirm = useConfirm();
  const { dispatch } = useStore();
  const handleDelete = async () => {
    const confirm = await showConfirm(DELETE_BOARD_ITEM_MESSAGE, { enableBackdropClick: true });
    if (confirm) {
      await apiDeleteBoardItem({ boardId, itemId });
      dispatch(removeBoardItemAction({ boardId, itemId }));
    }
  };
  return (
    <HStack className={boardItemStyle.container} data-id={itemId} draggable>
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
          onClick={handleDelete}
          style={{
            flex: 'unset',
          }}
        />
      </HStack>
    </HStack>
  );
};

export default BoardItem;
