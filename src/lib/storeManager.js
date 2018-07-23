import _ from 'lodash';
import reduceReducers from 'reduce-reducers';
import {combineReducers} from 'redux';

const storeManager = {
  reducerMap: {},
  register(reducerMap) {
    _.each(reducerMap, (reducer, name) => {
      if (!this.reducerMap[name]) this.reducerMap[name] = [];

      this.reducerMap[name].push(reducer);
    });
  },
  createRootReducer() {
    return combineReducers(
      _.mapValues(this.reducerMap, (reducers) => reduceReducers(...reducers))
    );
  }
};

export default storeManager;
