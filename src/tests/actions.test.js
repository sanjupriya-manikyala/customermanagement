// actions.test.js
import { incrementCounter, decrementCounter } from '../actions/actions';

describe('actions', () => {
  it('should create an action to increment the counter', () => {
    const expectedAction = { type: 'INCREMENT_COUNTER' };
    expect(incrementCounter()).toEqual(expectedAction);
  });

  it('should create an action to decrement the counter', () => {
    const expectedAction = { type: 'DECREMENT_COUNTER' };
    expect(decrementCounter()).toEqual(expectedAction);
  });
});
