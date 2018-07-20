import _ from 'lodash';
import reduceReducers from 'reduce-reducers';
import {createStore, combineReducers} from 'redux';

const appManager = {
  modules: [],
  actions: {},
  services: {},
  store: null,
  register(module) {
    this.modules.push(module);
  },
  bootstrap() {
    const reducerMap = {};

    _.each(this.modules, (module) => {
      _.each(module.dataDependencies, (dep) => {
        console.log('dep', dep);
        if (!reducerMap[dep.name]) reducerMap[dep.name] = [];

        reducerMap[dep.name].push(dep.value);
      });

      _.reduce(module.actionCreators, (config) => (
        _.assign(this.actionCreators, config)
      ), this.actionCreators);

      _.reduce(module.services, (config) => (
        _.assign(this.services, config)
      ), this.services);
    });

    console.log(reducerMap);

    const rootReducer = combineReducers(
      _.mapValues(reducerMap, (reducers) => reduceReducers(...reducers))
    );

    console.log(rootReducer);

    this.store = createStore(rootReducer);
  }
};

export default appManager;
