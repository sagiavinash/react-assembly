import _ from 'lodash';
import reduceReducers from 'reduce-reducers';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const storeManager = {
  modules: [],
  store: null,
  register(name, reducers) {
    this.modules.push({name, reducers});
  },
  bootstrap({initialState} = {}) {
    const reducerMap = {};

    _.each(this.modules, (module) => {
      _.each(module.reducers, (reducer, name) => {
        if (!reducerMap[name]) reducerMap[name] = [];

        reducerMap[name].push(reducer);
      });
    });

    const rootReducer = combineReducers(
      _.mapValues(reducerMap, (reducers) => reduceReducers(...reducers))
    );

    this.store = initialState ? (
      createStore(rootReducer, initialState, applyMiddleware(thunk))
    ) : (
      createStore(rootReducer, applyMiddleware(thunk))
    );
  }
};

export default storeManager;
