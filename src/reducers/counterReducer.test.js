// counterReducer.test.js
import counterReducer from './counterReducer';

describe('counterReducer', () => {
  it('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual({ count: 0 });
  });

  it('should handle INCREMENT_COUNTER', () => {
    const action = { type: 'INCREMENT_COUNTER' };
    const state = { count: 2 };
    expect(counterReducer(state, action)).toEqual({ count: 3 });
  });

  it('should handle DECREMENT_COUNTER', () => {
    const action = { type: 'DECREMENT_COUNTER' };
    const state = { count: 4 };
    expect(counterReducer(state, action)).toEqual({ count: 3 });
  });
});