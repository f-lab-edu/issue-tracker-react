import { VStack } from '@ui/components/common';
import { BoardItem } from '@ui/components/board';
import styleToken from '@ui/core/styleToken.css';

const BoardBody = () => (
  <VStack marginTop={styleToken.space[3]}>
    {Array.from({ length: 10 }).map((_, index) => (
      <BoardItem key={index} />
    ))}
  </VStack>
);

export default BoardBody;
