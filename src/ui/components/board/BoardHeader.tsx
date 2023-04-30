import { HStack, VStack } from '@ui/components/common';
import BoardTitle from '@ui/components/board/BoardTitle.tsx';
import BoardItemCreate from '@ui/components/board/BoardItemCreate.tsx';
import IconButton from '../button/IconButton.tsx';

type Props = {
  title: string;
  count: number;
};

const BoardHeader = ({ title = '', count = 0 }: Props) => (
  <VStack>
    <HStack justifyContent="space-between">
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
