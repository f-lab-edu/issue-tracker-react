import { VStack } from '@ui/components/common';
import { BoardItem } from '@ui/components/board';
import styleToken from '@ui/core/styleToken.css';
import { BoardColumnType } from '@lib/type/board.type';

type Props = Pick<BoardColumnType, 'boardId' | 'items'>;

const BoardBody = ({ boardId, items }: Props) => (
  <VStack data-id={boardId} data-type="parent" style={{ marginTop: styleToken.space[3] }}>
    {items.map((item) => (
      <BoardItem key={item.itemId} boardId={boardId} itemId={item.itemId} title={item.title} author={item.author} />
    ))}
    <div className="last" style={{ height: 50 }} />
  </VStack>
);

export default BoardBody;
