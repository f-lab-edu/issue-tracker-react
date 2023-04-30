import Badge from '@ui/components/common/Badge.tsx';
import { HStack } from '@ui/components/common';
import { boardTitleStyle } from '@ui/components/board/board.css';

type Props = {
  title: string;
  count: number;
};

const BoardTitle = ({ title, count }: Props) => (
  <HStack alignItems="center">
    <Badge>{title}</Badge>
    <span className={boardTitleStyle.count}>{count}</span>
  </HStack>
);

export default BoardTitle;
