import _ from 'lodash';
import {createStore} from 'redux';
import reduceReducers from 'reduce-reducers';
import {combineReducers} from 'redux';

const storeManager = {
  store: null,
  reducerMap: {},
  registerReducer(reducerMap) {
    _.each(reducerMap, (reducer, name) => {
      if (!this.reducerMap[name]) this.reducerMap[name] = [];

      this.reducerMap[name].push(reducer);
    });
  },
  createRootReducer() {
    return combineReducers(
      _.mapValues(this.reducerMap, (reducers) => reduceReducers(...reducers))
    );
  },
  createStore({initialState, enhancer}) {
    this.store = createStore(
      this.createRootReducer(),
      ..._.compact([initialState, enhancer]),
    );

    return this.store;
  },
  refreshStore() {
    this.store.replaceReducer(this.createRootReducer());
    console.log('this.store.getState()', this.store.getState());
  }
};

export default storeManager;
