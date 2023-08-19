import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';

import logger from 'redux-logger';

const init = 'init';
const increament = 'increment';
const decrement = 'decrement';
const incrementByAmount = 'incrementbyAmount';

const store = createStore(reducer, applyMiddleware(logger.default));

let history = [];

// action name constants

function reducer(state = { amount: 1 }, action) {
  //immutability --- increment

  switch (action.type) {
    case init:
      return { amount: action.payload };

    case increament:
      return { amount: state.amount + 1 };
    case decrement:
      return { amount: state.amount - 1 };
    case incrementByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

// console.log(store.getState());

store.subscribe(() => {
  history.push(store.getState());
  console.log(history);
});

// Action Creators

function initUsers(value) {
  return { type: init, payload: value };
}

function decrementFuc() {
  return { type: decrement };
}

function incrementByAmountFuc(value) {
  return { type: incrementByAmount, payload: value };
}

// setInterval(() => {
//   store.dispatch(incrementByAmountFuc(3));
// }, 2000);

// setInterval(() => {
//   store.dispatch(initUsers(200));
// }, 2000);
setInterval(() => {
  store.dispatch(initUsers(200));
}, 3000);
s;
