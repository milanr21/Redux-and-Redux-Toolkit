import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(logger.default));

function reducer(state = { amount: 1 }, action) {
  if (action.type === 'increment') {
    return { amount: state.amount + 1 };
  }

  return state;
}

// console.log(store.getState());

let history = [];

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

setInterval(() => {
  store.dispatch({ type: 'increment' });
}, 4000);
