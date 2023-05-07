import { apiGetBoardList } from '@lib/api/board';
import { setInitialBoardAction } from '@lib/store/reducer/boardReducer';
import UseStore from '@lib/store/useStore';
import { useEffectOnce } from '@lib/hooks';

const useUpdateInitialBoard = () => {
  const { dispatch } = UseStore();

  const updateInitialBoard = async () => {
    const boards = await apiGetBoardList();
    dispatch(setInitialBoardAction(boards));
  };

  useEffectOnce(() => {
    updateInitialBoard();
  });
};

export default useUpdateInitialBoard;
