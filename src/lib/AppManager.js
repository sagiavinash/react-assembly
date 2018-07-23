import _ from 'lodash';
import reduceReducers from 'reduce-reducers';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const appManager = {
  modules: [],
  store: null,
  register(module) {
    this.modules.push(module);
  },
  bootstrap() {
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

    this.store = createStore(
      rootReducer,
      applyMiddleware(thunk),
    );
  }
};

export default appManager;
