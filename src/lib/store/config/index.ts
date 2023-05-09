import BaseStore from '@lib/store/config/baseStore';
import reducer, { initialState } from '@lib/store/reducer/boardReducer';

const store = new BaseStore({ reducer, initialState });

export default store;
