import _ from 'lodash';
import reduceReducers from 'reduce-reducers';
import {combineReducers} from 'redux';

const storeManager = {
  modules: [],
  rootReducer: null,
  register(name, reducers) {
    this.modules.push({name, reducers});
  },
  createRootReducer() {
    const reducerMap = {};

    _.each(this.modules, (module) => {
      _.each(module.reducers, (reducer, name) => {
        if (!reducerMap[name]) reducerMap[name] = [];

        reducerMap[name].push(reducer);
      });
    });

    this.rootReducer = combineReducers(
      _.mapValues(reducerMap, (reducers) => reduceReducers(...reducers))
    );

    return this.rootReducer;
  }
};

export default storeManager;
