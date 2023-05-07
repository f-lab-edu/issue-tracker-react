import Observer from './observer';

type Reducer<State, Action> = (state: State, action: Action) => State;

type StoreOptions<State, Action> = {
  reducer: Reducer<State, Action>;
  initialState?: State;
};

class BaseStore<State, Action> extends Observer {
  private state: State;

  private readonly reducer: Reducer<State, Action>;

  constructor(options: StoreOptions<State, Action>) {
    super();
    this.state = options.initialState ?? ({} as State);
    this.reducer = options.reducer;
  }

  getState() {
    return this.state;
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
    this.notify();
  }
}

export default BaseStore;
