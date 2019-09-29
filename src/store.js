import { createStore, combineReducers } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { reducer as formReducer } from 'redux-form';
import ModalReducer from './modals/modalConductorReducer';
const reducers = combineReducers({
    modal:ModalReducer
})
const reducer = combineReducers({
    ...reducers,
    form: formReducer
  });
const store = createStore(reducer, {});
export const history = createHistory();
export default store;
