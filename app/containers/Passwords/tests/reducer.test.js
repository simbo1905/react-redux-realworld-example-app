

import pagePasswordsReducer from '../reducer';

describe('pagePasswordsReducer', () => {
  it('returns the initial state', () => {
    expect(pagePasswordsReducer(undefined, {})).toEqual({});
  });
});
