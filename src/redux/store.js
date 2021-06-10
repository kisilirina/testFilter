import { createStore, applyMiddleware } from 'redux';
import initState from './initState';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, initState(), composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()));
})

export default store;