import { useEffect, useRef, useState } from 'react';
import BaseStore from '@lib/store/config/baseStore';

const storeUtils = <State, Action>(store: BaseStore<State, Action>) => {
  const stateRef = useRef(store.getState());
  const [, forceRender] = useState({});

  const selector = <SelectedState>(selector: (state: State) => SelectedState): SelectedState => selector(stateRef.current);

  const dispatch = (action: Action) => {
    store.dispatch(action);
    const nextState = store.getState();
    if (stateRef.current !== nextState) {
      stateRef.current = store.getState();
      forceRender({});
    }
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      stateRef.current = store.getState();
      forceRender({});
    });
    return () => {
      unsubscribe();
    };
  }, [store]);

  return {
    selector,
    dispatch,
  };
};

export default storeUtils;
