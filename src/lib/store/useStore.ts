import store from '@lib/store/config';
import storeUtils from '@lib/store/storeUtils';

const useStore = () => {
  const { selector, dispatch } = storeUtils(store);
  return {
    selector,
    dispatch,
  };
};

export default useStore;
