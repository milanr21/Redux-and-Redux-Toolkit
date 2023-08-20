import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const init = 'init';
const increament = 'increment';
const decrement = 'decrement';
const incrementByAmount = 'incrementbyAmount';

const store = createStore(
  reducer,
  applyMiddleware(logger.default, thunk.default)
);

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

// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

// Async API Call

// async function getUser() {
//   const { data } = await axios.get('http://localhost:3000/accounts/1');
//   console.log(data);
// }

// getUser();

// Action Creators

function getUser(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    dispatch(initUser(data.amount));
  };
}

function decrementFuc() {
  return { type: decrement };
}

function initUser(value) {
  return { type: init, payload: value };
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

// setInterval(() => {
//   store.dispatch(initUsers(200));
// }, 3000);

setTimeout(() => {
  store.dispatch(getUser(2));
}, 3000);
