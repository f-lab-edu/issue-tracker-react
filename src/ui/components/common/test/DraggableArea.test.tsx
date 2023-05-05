import { render, screen } from '@testing-library/react';
import { DraggableArea } from '@ui/components/common';
import { boardFixture } from '@lib/fixture/board.fixture';
import { Board } from '@ui/components/board';

const simulateDragAndDrop = (source: HTMLElement, destination: HTMLElement) => {
  const dragStart = new Event('dragstart', { bubbles: true });
  const dragEnd = new Event('dragend', { bubbles: true });
  const drop = new Event('drop', { bubbles: true });

  source.dispatchEvent(dragStart);
  destination.dispatchEvent(drop);
  source.dispatchEvent(dragEnd);
};

const mockOnDrop = jest.fn();

describe('DraggableArea', () => {
  beforeEach(() => {
    mockOnDrop.mockClear();
  });

  it('DraggableArea 컴포넌트가 올바르게 렌더링되는지 확인합니다.', () => {
    const { container } = render(
      <DraggableArea onDrop={mockOnDrop}>
        {boardFixture.map((board) => (
          <Board key={board.boardId} boardId={board.boardId} title={board.title} items={board.items} />
        ))}
      </DraggableArea>,
    );
    expect(container).toHaveTextContent('할 일');
    expect(container).toHaveTextContent('진행 중');
    expect(container).toHaveTextContent('완료');
  });

  describe('DraggableArea onDrop 이벤트를 확인합니다.', () => {
    beforeEach(() => {
      mockOnDrop.mockClear();
      render(
        <DraggableArea onDrop={mockOnDrop}>
          {boardFixture.map((board) => (
            <Board key={board.boardId} boardId={board.boardId} title={board.title} items={board.items} />
          ))}
        </DraggableArea>,
      );
    });

    it('BoardItem을 다른 요소로 드래그하는 경우, onDrop 콜백 함수가 한 번 호출되는지 확인합니다.', () => {
      const sourceElement = screen.getByText('할 일 1');
      const destinationElement = screen.getByText('할 일 2');
      simulateDragAndDrop(sourceElement, destinationElement);
      expect(mockOnDrop).toHaveBeenCalledTimes(1);
    });

    it('BoardItem을 다른 요소로 드래그하는 경우, onDrop 콜백 함수의 인자로 source와 destination이 전달되는지 확인합니다.', () => {
      const sourceElement = screen.getByText('할 일 2');
      const destinationElement = screen.getByText('할 일 3');
      simulateDragAndDrop(sourceElement, destinationElement);
      expect(mockOnDrop).toHaveBeenCalledWith({
        nodeId: boardFixture[0].items[1].itemId,
        parentId: boardFixture[0].boardId,
        targetIndex: 1,
      });
    });
  });
});
