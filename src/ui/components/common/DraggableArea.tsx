import { PropsWithChildren } from 'react';
import useDragAndDrop, { onDropFunction } from '@lib/hooks/useDragAndDrop';
import { HStack } from '@ui/components/common';

type Props = {
  onDrop: onDropFunction;
};

const DraggableArea = ({ children, onDrop }: PropsWithChildren<Props>) => {
  const { handleDragStart, handleDragOver, handleDragEnter, handleDragEnd } = useDragAndDrop(onDrop);
  return (
    <HStack onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragEnd={handleDragEnd}>
      {children}
    </HStack>
  );
};

export default DraggableArea;
