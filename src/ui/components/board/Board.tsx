import { VStack } from '@ui/components/common';
import { BoardHeader, BoardBody } from '@ui/components/board';

type Props = {
  title: string;
  items: any[];
};

const Board = ({ title, items = [] }: Props) => (
  <VStack width="320px" height="auto" minHeight="64px" marginRight="32px">
    <BoardHeader title={title} count={items.length} />
    <BoardBody />
  </VStack>
);

export default Board;
