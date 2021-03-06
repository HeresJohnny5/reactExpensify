import { createStore } from 'redux';

// ACTION GENERATORS
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

// { incrrementBy } = { incrementBy: 5 }

const decrementBy = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const set = ({ count } = {}) => ({
  type: 'SET',
  count
});

const reset = () => ({
  type: 'RESET'
});

// REDUCER
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':      
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log('Store Changed:');
  console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

store.dispatch(reset());

store.dispatch(decrementBy());
store.dispatch(decrementBy({ decrementBy: 10 }));

store.dispatch(set());
store.dispatch(set({ count: 10 }));