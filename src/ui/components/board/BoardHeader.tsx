import { HStack, VStack } from '@ui/components/common';
import { BoardTitle, BoardItemCreate } from '@ui/components/board';
import { IconButton } from '../button';

type Props = {
  title: string;
  count: number;
};

const BoardHeader = ({ title = '', count = 0 }: Props) => (
  <VStack>
    <HStack style={{ justifyContent: 'space-between' }}>
      <BoardTitle title={title} count={count} />
      <HStack>
        <IconButton icon="add" onClick={() => {}} />
        <IconButton icon="close" onClick={() => {}} />
      </HStack>
    </HStack>
    <BoardItemCreate />
  </VStack>
);

export default BoardHeader;
