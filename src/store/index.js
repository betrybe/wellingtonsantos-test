// import das libs:
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// import dos reducers:
import globalReducer from '../reducers';
import userReducer from '../reducers/user';
import walletReducer from '../reducers/wallet';

// "juntando" os reducers para a criação da store:
const reducers = combineReducers({
  global: globalReducer,
  user: userReducer,
  wallet: walletReducer,
});

// compose faz uma "junção" do middleware com as ferramenmtas de debug pra facilitar o desenvolvimento:
const compose = composeWithDevTools(applyMiddleware(thunk));

// Criando a store do redux:
const store = createStore(reducers, compose);

export default store;
