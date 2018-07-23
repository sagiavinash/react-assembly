import {createStore, combineReducers} from 'redux';

const reduceReducers = (reducers) => (state, action) => (
  reducers.reduce((result, reducer) => (
    reducer(result, action)
  ), state)
);

const storeManager = {
  store: null,
  reducerMap: {},
  registerReducer(reducerMap) {
    for (let name in reducerMap) {
      if (!this.reducerMap[name]) this.reducerMap[name] = [];

      this.reducerMap[name].push(reducerMap[name]);
    }
  },
  createRootReducer() {
    return combineReducers(
      Object.keys(this.reducerMap).reduce((result, key) => ({
        ...result,
        [key]: reduceReducers(this.reducerMap[key])
      }), {})
    );
  },
  createStore({initialState, enhancer}) {
    this.store = createStore(
      this.createRootReducer(),
      ...(initialState ? [initialState, enhancer] : [enhancer]),
    );

    return this.store;
  },
  refreshStore() {
    this.store.replaceReducer(this.createRootReducer());
    console.log('this.store.getState()', this.store.getState());
  }
};

export default storeManager;
