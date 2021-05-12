import {createStore, applyMiddleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {AuthState} from './modules/Auth/types';

import ReducerRoot from './modules/ReducerRoot';
import SagaRoot from './modules/SagasRoot';

export interface ApplicationState {
  auth: AuthState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
    ReducerRoot,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(SagaRoot);

export default store;
