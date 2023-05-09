import { apiGetBoardList } from '@lib/api/board';
import { setInitialBoardAction } from '@lib/store/reducer/boardReducer';
import useStore from '@lib/store/useStore';
import { useEffectOnce } from '@lib/hooks';

const useUpdateInitialBoard = () => {
  const { dispatch } = useStore();

  const updateInitialBoard = async () => {
    const boards = await apiGetBoardList();
    dispatch(setInitialBoardAction(boards));
  };

  useEffectOnce(() => {
    updateInitialBoard();
  });
};

export default useUpdateInitialBoard;
