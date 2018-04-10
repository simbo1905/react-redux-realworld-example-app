

import organizationsReducer from '../reducer';

describe('organizationsReducer', () => {
  it('returns the initial state', () => {
    expect(organizationsReducer(undefined, {})).toEqual({});
  });
});
