import { VStack } from '@ui/components/common';
import { BoardHeader, BoardBody } from '@ui/components/board';
import { boardStyle } from '@ui/components/board/board.css';
import { BoardColumnType } from '@lib/type/board.type';

type Props = {} & BoardColumnType;

const Board = ({ boardId, title, items }: Props) => (
  <VStack className={boardStyle.container}>
    <BoardHeader title={title} count={items.length} />
    <BoardBody boardId={boardId} items={items} />
  </VStack>
);

export default Board;
