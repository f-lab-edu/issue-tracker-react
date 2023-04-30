import { MdEditCalendar } from 'react-icons/all';
import { HStack, VStack } from '@ui/components/common';
import styleToken from '@ui/core/styleToken.css';
import { IconButton } from '@ui/components/button';
import { boardItemStyle } from '@ui/components/board/board.css';

const BoardItem = () => (
  <HStack className={boardItemStyle.container}>
    <VStack flex="1">
      <MdEditCalendar color={styleToken.color.gray['600']} size={18} />
    </VStack>
    <VStack className={boardItemStyle.content} flex="8">
      <div>할 일 - 1</div>
      <div>
        <span>added by</span>
        <strong className={boardItemStyle.author}>bytrustu</strong>
      </div>
    </VStack>
    <HStack flex="1" alignItems="flex-start" justifyContent="flex-end">
      <IconButton
        icon="close"
        onClick={() => {}}
        style={{
          flex: 'unset',
        }}
      />
    </HStack>
  </HStack>
);

export default BoardItem;
