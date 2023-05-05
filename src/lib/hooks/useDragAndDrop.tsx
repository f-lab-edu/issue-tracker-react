import { DragEvent, useRef } from 'react';
import { closest, getMoveToElementInfo, MoveToElementInfo } from '@lib/utils/dom';

export type onDropFunction = (moveElementInfo: MoveToElementInfo) => void;

const useDragAndDrop = (onDrop: onDropFunction) => {
  const dragNodeRef = useRef<HTMLElement | null>(null);

  const handleDragStart = (e: DragEvent) => {
    const $target = closest(e.target as HTMLElement, '[draggable="true"], .last');
    if (!$target) {
      return;
    }
    dragNodeRef.current = $target;
    dragNodeRef.current.style.opacity = '0.5';
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    const $enterNode = closest(e.target as HTMLElement, '[draggable="true"], .last');
    if ($enterNode && dragNodeRef.current && dragNodeRef.current !== $enterNode) {
      $enterNode.parentNode?.insertBefore(dragNodeRef.current, $enterNode);
    }
  };

  const handleDragEnd = (e: DragEvent) => {
    const $target = e.target as HTMLElement;
    $target.style.opacity = '1';
    if (dragNodeRef.current) {
      const moveElementInfo = getMoveToElementInfo(dragNodeRef.current);
      if (moveElementInfo) {
        onDrop(moveElementInfo);
      }
    }
    dragNodeRef.current = null;
  };

  return {
    handleDragStart,
    handleDragOver,
    handleDragEnter,
    handleDragEnd,
  };
};

export default useDragAndDrop;
