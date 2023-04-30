import { MdAdd } from 'react-icons/md';
import { boardColumnCreateStyle } from '@ui/components/board/board.css';

type Props = {
  onClick: () => void;
};
const BoardColumnCreate = ({ onClick }: Props) => (
  <button type="button" className={boardColumnCreateStyle.container} onClick={onClick}>
    <MdAdd size={22} />
    <span className={boardColumnCreateStyle.text}>컬럼 추가하기</span>
  </button>
);

export default BoardColumnCreate;
