

import pageProfileReducer from '../reducer';

describe('pageProfileReducer', () => {
  it('returns the initial state', () => {
    expect(pageProfileReducer(undefined, {})).toEqual({});
  });
});
